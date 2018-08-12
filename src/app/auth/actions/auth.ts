import { Action } from '@ngrx/store';
import { PasswordAuthenticate } from '../models/authenticate';
import { Session } from '../models/session.model';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  SamlLogin = '[Auth] SamlLogin',
  OauthLogin = '[Auth] OauthLogin',
  Logout = '[Auth] Logout',
  LoginSuccess = '[Auth] LoginSuccess',
  LoginFailure = '[Auth] LoginFailure',
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(public payload: PasswordAuthenticate) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;

  constructor(public payload: {session: Session}) {}
}

export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LoginFailure;

  constructor(public payload: any) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}

export type AuthActions =
  | Login
  | LoginSuccess
  | LoginFailure
  | Logout;
