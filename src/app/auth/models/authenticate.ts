export interface IAuthenticateBase {
  metabaseId: string;
  locale?: string;
}

export interface IPasswordAuthenticate extends IAuthenticateBase {
  username: string;
  password: string;
}
