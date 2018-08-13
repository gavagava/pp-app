import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromAuth from '../../reducers';
import * as Auth from '../../actions/auth';
import { PasswordAuthenticate } from '../../models/authenticate';

@Component({
  selector: 'pp-login-page',
  templateUrl: './login-page.template.html',
  styleUrls: ['./login-page.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private store: Store<fromAuth.State>) {}

  ngOnInit() {}

  onSubmit($event: PasswordAuthenticate) {
    this.store.dispatch(new Auth.Login($event));
  }
}
