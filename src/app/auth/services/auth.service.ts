import { Injectable } from '@angular/core';
import * as lcid from 'lcid';
import * as _ from 'lodash';
import { Observable, throwError, of, combineLatest } from 'rxjs';
import { SomService } from '../../shared/services/som.service';
import { IPasswordAuthenticate } from '../models/authenticate';
import { Session } from '../models/session.model';
import { switchMap, map } from 'rxjs/operators';
import {
  OpenMetabaseRequest,
  OpenMetabaseResponse,
  GetSvcRequest,
  GetSvcResponse,
  GetMbSecRequest,
  GetMbSecResponse
} from '../../shared/som';
import { LicenseFeatures, Privileges, IMetabaseUser } from '../models/user.model';


@Injectable()
export class AuthService {

  constructor(private som: SomService) { }

  login({ username, password, locale, metabaseId }: IPasswordAuthenticate): Observable<Session> {
    const body: OpenMetabaseRequest = {
      OpenMetabase: {
        tDef: {
          id: metabaseId,
          locale: lcid.to(locale)
        },
        tCreds: {
          user: { id: username },
          pass: password
        }
      }
    };

    return this.som.send<OpenMetabaseRequest, OpenMetabaseResponse>({ body }).pipe(switchMap(r => {
      if (r.isSomError) {
        return throwError(r);
      } else {
        const sMd = r.response.OpenMetabaseResult;

        return combineLatest(this.getLicenseFeatures(), this.getSessionUserMd(sMd.id)).pipe(map(
          ([lFeatures, mbUser]) => {
            return new Session(
              sMd.id,
              metabaseId,
              sMd.sessCookie,
              sMd.defLocale,
              { username, license: lFeatures, mbUser }
            );
          }
        ));
      }
    }));
  }

  /**
   * Запрашивает параметры лицензии
   *
   * @returns {Observable<LicenseFeatures>}
   * @memberof AuthService
   */
  getLicenseFeatures(): Observable<LicenseFeatures> {
    return this.som.send<GetSvcRequest, GetSvcResponse>({
      body: {
        GetSvc: {
          tArg: {
            pattern: { licenses: true }
          }
        }
      }
    }).pipe(switchMap(r => {
      if (r.isSomError) {
        return throwError(r);
      } else {
        const lFeatures = r.response.GetSvcResult.meta.licenses.its.it;
        return of(<LicenseFeatures>_.mapValues(_.keyBy(lFeatures, 'type'), 'enabled'));
      }
    }));
  }

  /**
   * Запрашивает метаданные текущего пользователя сессии
   *
   * @param {string} sessionId Идентификатор сессии
   * @returns {Observable<IMetabaseUser>}
   * @memberof AuthService
   */
  getSessionUserMd(sessionId: string): Observable<IMetabaseUser> {
    return this.som.send<GetMbSecRequest, GetMbSecResponse>({
      body: {
        GetMbSec: {
          tMbSec: { id: sessionId },
          tArg: {
            pattern: {
              users: 'Get',
              user: {
                privileges: 'Get',
                data: true
              },
              usersFilter: {
                current: true
              }
            }
          }
        }
      }
    }).pipe(switchMap(r => {
      if (r.isSomError) {
        return throwError(r);
      } else {
        const cUserMd = r.response.GetMbSecResult.meta.users.its.it[0];

        return of({
          k: cUserMd.k,
          n: cUserMd.n,
          id: cUserMd.id,
          sid: cUserMd.sid.sid,
          data: {
            desc: cUserMd.data.desc,
            isNT: cUserMd.data.isNT,
            isExternal: cUserMd.data.isExternal,
            isBuiltin: cUserMd.data.isBuiltin,
            info: cUserMd.data.user
          },
          privileges: <Privileges>_.keyBy(cUserMd.privileges.its.it, 'predefined')
        });
      }
    })
    );
  }
}
