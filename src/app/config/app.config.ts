import { InjectionToken } from '@angular/core';

export interface IAppConfig {
  serviceUrl: string;
  defaultMetabaseId: string;
  checkStatusInterval: number;
}

export let APP_CONFIG = new InjectionToken('app.config');

export const APP_DEFAULT_CONFIG: IAppConfig = {
  serviceUrl: 'http://pp/dev8/axis2/services/PP.SOM.Som',
  defaultMetabaseId: 'systest',
  checkStatusInterval: 60000
};
