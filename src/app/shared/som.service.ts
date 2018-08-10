import { Injectable, Inject } from '../../../node_modules/@angular/core';
import { APP_CONFIG, IAppConfig } from '../config/app.config';
import { BatchExecResult } from '../som/som';

/**
 * Класс для взаимодействия с сервисами PP
 */
@Injectable()
class SomService {
  private batchMode = 0; // счетчик batch-режима

  constructor(@Inject(APP_CONFIG) private config: IAppConfig) {

  }

  /**
   * Включает пакетный режим отправки запросов. Функция _send не отправляются запросы сразу, а собирает из них BatchExec
   *
   * @param {boolean} [bIgnoreError] в случае true не прерывает исполнение пакетов в запросе в случае ошибки. По-умолчанию false.
   * @memberof SomService
   */
  beginBatch(bIgnoreError?: boolean) {

  }

  endBatch(): Observable<BatchExecResult> {

  }

  send<T>(body: any): Observable<T> {

  }
}
