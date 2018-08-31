import { Action } from '@ngrx/store';
import { IPasswordAuthenticate } from '../models/authenticate';
import { Session } from '../models/session.model';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  SamlLogin = '[Auth] SamlLogin',
  OauthLogin = '[Auth] OauthLogin',
  Logout = '[Auth] Logout',
  LoginSuccess = '[Auth] LoginSuccess',
  LoginFailure = '[Auth] LoginFailure',
  CheckStatus = '[Auth] CheckStatus',
  CheckStatusSuccess = '[Auth] CheckStatusSuccess',
  CheckStatusFailure = '[Auth] CheckStatusFailure'
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(public payload: IPasswordAuthenticate) {}
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

export class CheckStatus implements Action {
  readonly type = AuthActionTypes.CheckStatus;

  constructor(public payload: {session: Session}) {}
}

export class CheckStatusSuccess implements Action {
  readonly type = AuthActionTypes.CheckStatusSuccess;

  constructor(public payload: {session: Session}) {}
}

export class CheckStatusFailure implements Action {
  readonly type = AuthActionTypes.CheckStatusFailure;

  constructor(public payload: {session: Session}) {}
}

export type AuthActions =
  | Login
  | LoginSuccess
  | LoginFailure
  | Logout
  | CheckStatus
  | CheckStatusSuccess
  | CheckStatusFailure;
