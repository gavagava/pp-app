import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG, IAppConfig } from '../config/app.config';
import { Observable, BehaviorSubject } from 'rxjs';
import * as lcid from 'lcid';

import { Session } from './model/session.model';
import { StorageService } from '../shared/storage.service';
import { OpenMetabase, OpenMetabaseResult } from '../som/som';
import { User } from './model/user.model';

@Injectable()
export class SessionStore {

  private sessionSource: BehaviorSubject<Session> = new BehaviorSubject(new Session());

  constructor(
    @Inject(APP_CONFIG) private config: IAppConfig,
    private http: HttpClient,
    private appStorage: StorageService
  ) {
    this.initSessionFromStorage();
  }

  get session$() {
    return this.sessionSource.asObservable();
  }

  /**
   * Пытается восстановить сессию из sessionStorage браузера
   */
  private initSessionFromStorage() {
    const storageString = this.appStorage.getSessionValue('session');

    if (storageString) {
      const sessionJson = JSON.parse(storageString);

      this.sessionSource.next(new Session(sessionJson.sessionId, sessionJson.metabaseId, sessionJson.sessionCookie, sessionJson.locale));
    }
  }

  login(user: string, password: string, metabaseId?: string, locale?: string): Observable<Session> {
    const body: { OpenMetabase: OpenMetabase } = {
      OpenMetabase: {
        tDef: {
          id: metabaseId || this.config.defaultMetabaseId,
          locale: lcid.to(locale || this.config.defaultLocale || navigator.language)
        },
         tCreds: {
           user: {
             id: user
           },
           pass: password
         }
      }
    };

    return this.http.post<Session>(this.config.serviceUrl, body, { responseType: 'json' }).forEach(
      (res: OpenMetabaseResult) => new Session(res.id, metabaseId, res.sessCookie, res.defLocale, new User(user, user, {}))
    );
  }
}
