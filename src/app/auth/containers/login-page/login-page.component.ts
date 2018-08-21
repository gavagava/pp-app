import { Component, OnInit, Inject } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromAuth from '../../reducers';
import * as fromRoot from '../../../reducers';
import * as Auth from '../../actions/auth';
import { PasswordAuthenticate } from '../../models/authenticate';
import { APP_VERSION } from '../../../shared/version';
import { Observable } from 'rxjs';

@Component({
  selector: 'pp-login-page',
  templateUrl: './login-page.template.html',
  styleUrls: ['./login-page.scss']
})
export class LoginPageComponent implements OnInit {
  urlLang$: Observable<string>;

  constructor(
    private store: Store<fromAuth.State>,
    @Inject(APP_VERSION) private version: string
  ) {
    this.urlLang$ = this.store.pipe(
      select(fromRoot.getUrlParamLang)
    );
  }

  ngOnInit() {}

  onSubmit($event: PasswordAuthenticate) {
    this.store.dispatch(new Auth.Login($event));
  }
}
