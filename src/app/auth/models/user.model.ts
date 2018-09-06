import { MbUserLockedState, MbAutoRun, MbSecPredefinedPrivilege, LicenseFeatureType } from '../../shared/som';

export interface IMetabaseUserSecurityInfo {
  mustChangePasswordAtNextLogon?: boolean;
  cannotChangePassword?: boolean;
  lockedState?: MbUserLockedState;
  manageDBGrants?: boolean;
  maxLogonSessions?: number;
  lastLoginStamp?: any;
  hasAccessToRepository?: boolean;
  isAdmin?: boolean;
  isIsa?: boolean;
  isRoled?: boolean;
  changePassStamp?: any;
  autoRun?: MbAutoRun;
  temporaryAge?: number;
  eternalPass?: boolean;
  certificate?: string;
}

export interface IMetabaseUserData {
  desc?: string;
  isNT?: boolean;
  isExternal?: boolean;
  isBuiltin?: boolean;
  info: IMetabaseUserSecurityInfo;
}

export type Privileges = Record<MbSecPredefinedPrivilege, {
  k: number,
  id: string,
  n: string,
  predefined: MbSecPredefinedPrivilege
}>;

export interface IMetabaseUser {
  k: number;
  id: string;
  n: string;
  sid: string;
  data: IMetabaseUserData;
  privileges: Privileges;
}

export type LicenseFeatures = Record<LicenseFeatureType, boolean>;

export interface IUser {
  username: string;
  license: LicenseFeatures;
  mbUser: IMetabaseUser;
}
