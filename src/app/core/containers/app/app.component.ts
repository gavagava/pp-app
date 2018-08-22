import { Component, Inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { APP_CONFIG, IAppConfig } from '../../../config/app.config';
import * as _ from 'lodash';
import { Store, select } from '@ngrx/store';

import * as fromRoot from '../../../reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'pp-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  urlLang$: Observable<string | void>;

  constructor (
    @Inject(APP_CONFIG) private config: IAppConfig,
    private store: Store<fromRoot.State>,
    public translate: TranslateService
  ) {

  }

  ngOnInit() {
    this.translate.setDefaultLang(this.config.defaultLocale || this.translate.getBrowserLang());
  }
}
