export interface AuthenticateBase {
  metabaseId: string;
  locale?: string;
}

export interface PasswordAuthenticate extends AuthenticateBase {
  username: string;
  password: string;
}
