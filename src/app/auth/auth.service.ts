import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG } from '../config/app.config';
import { Observable } from 'rxjs';

import { Session } from './session.model';
import { StorageService } from '../shared/storage.service';

@Injectable()
export class AuthService {

  currentSession: Session = null;

  constructor(
    @Inject(APP_CONFIG) private config,
    private http: HttpClient,
    private appStorage: StorageService
  ) {

  }

  /**
   * Пытается восстановить сессию из sessionStorage браузера
   */
  private initSessionFromStorage() {
    let session = this.appStorage.getSessionValue('session');
  }

  login(user: string, password: string, metabaseId?: string): Observable<Session> {

  }
}
