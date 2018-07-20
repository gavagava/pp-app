import { InjectionToken } from '@angular/core';

export interface IAppConfig {
  serviceUrl: string;
  defaultMetabaseId: string;
  storagePrefix: string;
  checkStatusInterval: number;
  defaultLocale: string;
  pdfReaderUrl: string;
  ieUpdateUrl: string;
  helpUrl: string;
}

export let APP_CONFIG = new InjectionToken('app.config');

export const APP_DEFAULT_CONFIG: IAppConfig = {
  serviceUrl: 'http://pp/dev8/axis2/services/PP.SOM.Som',
  defaultMetabaseId: 'systest',
  storagePrefix: 'pp',
  checkStatusInterval: 60000,
  defaultLocale: 'ru',
  pdfReaderUrl: 'http://get.adobe.com/reader/',
  ieUpdateUrl: 'https://support.microsoft.com/en-us/help/18520/download-internet-explorer-11-offline-installer',
  helpUrl: 'http://help.fsight.ru'
};
