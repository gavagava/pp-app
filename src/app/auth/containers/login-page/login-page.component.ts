import { Component, Inject, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { APP_VERSION } from '../../../shared/version';
import * as Auth from '../../actions/auth';
import { IPasswordAuthenticate } from '../../models/authenticate';
import * as fromAuth from '../../reducers';
import * as fromRoot from '../../../reducers';
import { APP_CONFIG, IAppConfig } from '../../../config/app.config';


@Component({
  selector: 'pp-login-page',
  templateUrl: './login-page.template.html',
  styleUrls: ['./login-page.scss']
})
export class LoginPageComponent implements OnInit {
  appLang$: Observable<string>;
  repo$: Observable<string>;
  langs: string[] = [];

  constructor(
    @Inject(APP_CONFIG) private config: IAppConfig,
    private store: Store<fromAuth.State>,
    @Inject(APP_VERSION) public version: string
  ) {
    this.appLang$ = this.store.pipe(select(fromRoot.getLanguage));
    this.repo$ = this.store.pipe(select(fromRoot.getRepo));
  }

  ngOnInit() {
    this.langs = this.config.localesList || [];
  }

  onSubmit($event: IPasswordAuthenticate) {
    this.store.dispatch(new Auth.Login($event));
  }
}
