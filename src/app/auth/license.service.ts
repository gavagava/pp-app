import { Injectable, Inject } from '@angular/core';
import { APP_CONFIG, IAppConfig } from '../config/app.config';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

enum abc {
  A1 = 'A1',
  A2 = 'A2'
}

/**
 * Класс предоставляет доступ данным лицензии платформы
 */
@Injectable()
export class LicenseService {
  constructor(
    @Inject(APP_CONFIG) private config: IAppConfig,
    private http: HttpClient
  ) {}

  getLicenseFeatures(): Observable<{ [feature: string]: boolean }> {
    const body = {
      GetSvc: {
        tArg: {
          pattern: { license: true }
        }
      }
    };
    return this.http.post<any>(this.config.serviceUrl, body, { responseType: 'json' })
    .pipe(map(json => {
      const res:{ [feature: string]: boolean } = {};
      try {
        const licenseInfo: { type: string, enabled: boolean }[] = json.GetSvcResult.licenses.its.it;
        licenseInfo.forEach(item => res[item.type] = item.enabled);
      } catch {}

      return res;
    }));
  }
}
