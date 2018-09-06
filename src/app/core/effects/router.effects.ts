import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { map, tap } from 'rxjs/operators';
import * as _ from 'lodash';

import { RouterStateUrl } from '../../shared/utils';
import { APP_CONFIG, IAppConfig } from '../../config/app.config';

@Injectable()
export class RouterEffects {
  @Effect({ dispatch: false })
  navigate$ = this.actions$.pipe(
    ofType(ROUTER_NAVIGATION),
    map((action: RouterNavigationAction<RouterStateUrl>) => action.payload.routerState),
    tap((routerState: RouterStateUrl) => {
      const queryLang = _.get(routerState.queryParams, 'locale');
      const langList = this.config.localesList || [];
      let defaultLang = this.config.defaultLocale || this.translate.getBrowserLang();

      const needNavigate = _.isEmpty(queryLang) || (langList.length && langList.indexOf(queryLang) === -1);

      if (needNavigate) {
        const isDefaultLangValid = langList.length === 0 || langList.indexOf(defaultLang) !== -1;

        if (!isDefaultLangValid) {
          defaultLang = langList[0];
        }

        this.router.navigate(
          [routerState.url],
          { queryParams: _.merge({}, routerState.queryParams, { locale: defaultLang }) }
        );
      } else {
        this.translate.use(queryLang);
      }
    })
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    @Inject(APP_CONFIG) private config: IAppConfig,
    private translate: TranslateService
  ) {}
}
