import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, PartialObserver, Subject } from 'rxjs';
import { bufferTime, find } from 'rxjs/operators';
import * as _ from 'lodash';
import { APP_CONFIG, IAppConfig } from '../../config/app.config';
import { BatchExecRequest, BatchExecResponse, SomRequest, SomResponse } from '../som';

export interface ISomRequest<T extends SomRequest = SomRequest> {
  body: T;
  customData?: any;
}

export interface ISomResponse<T extends SomRequest = SomRequest, K extends SomResponse = SomResponse> {
  request: ISomRequest<T>;
  isSomError: boolean;
  errorObj?: any;
  response?: K;
}

export class UnknownSomError {
  constructor(public message: string) {}
}

// интервал собирания запросов в BatchExec из общего потока
const BATCHING_INTERVAL = 50;

/**
 * Класс для взаимодействия с сервисами PP
 */
@Injectable()
export class SomService {
  private request$ = new Subject<ISomRequest>();
  private response$ = new Subject<ISomResponse>();

  private somDefaultHeaders = new HttpHeaders({
    'Content-Type': 'application/json;charset=utf-8',
    'get-ppbi-time': '1',
    'SOAPAction': ''
  });

  constructor(@Inject(APP_CONFIG) private config: IAppConfig, private http: HttpClient) {
    this.request$.pipe(bufferTime(BATCHING_INTERVAL)).subscribe(this.reqObserver.bind(this));
  }

  private getHttpObserver(reqs: ISomRequest[]): PartialObserver<BatchExecResponse> {
    return {
      next: bRes => {
        bRes.BatchExecResult.its.it.forEach((r, index) => {
          if (_.get(r, 'detail.Error')) {
            this.response$.next({
              request: reqs[index],
              isSomError: true,
              errorObj: r
            });
          } else {
            this.response$.next({
              request: reqs[index],
              isSomError: false,
              response: r
            });
          }
        });
      },
      error: (e: HttpErrorResponse) => { throw e; }
    };
  }

  /**
   * Формирует BatchExec'и из потока запросов и отправляет посредством http
   *
   * @private
   * @param {ISomRequest[]} reqs
   * @memberof SomService
   */
  private reqObserver(reqs: ISomRequest[]) {
    if (reqs.length > 0) {
      const batchBody: BatchExecRequest = {
        BatchExec: {
          tArg: {
            bIgnoreError: true,
            its: {
              it: reqs.map(r => r.body)
            }
          }
        }
      };

      this.http.post<BatchExecResponse>(
        this.config.serviceUrl,
        batchBody,
        {
          headers: this.somDefaultHeaders,
          responseType: 'json',
          observe: 'body'
        }
      ).subscribe(this.getHttpObserver(reqs));
    }
  }

  send<T extends SomRequest, K extends SomResponse>(request: ISomRequest<T>): Observable<ISomResponse<T, K>> {
    this.request$.next(request);
    return this.response$.pipe(find<ISomResponse<T, K>>(r => r.request === request));
  }
}
