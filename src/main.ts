import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { APP_CONFIG, APP_DEFAULT_CONFIG } from './app/config/app.config';
import axios from 'axios';
import * as _ from 'lodash';

axios.get('assets/config/pp.json', {
  timeout: 2000,
  responseType: 'json',
  validateStatus: () => true,
  headers: [{'Cache-Control': 'no-cache'}]
}).then(response => {
  if (environment.production) {
    enableProdMode();
  }

  const config = response.status === 200 ? _.defaultsDeep(response.data, APP_DEFAULT_CONFIG) : APP_DEFAULT_CONFIG;

  platformBrowserDynamic([
    {
      provide: APP_CONFIG,
      useValue: config
    }
  ]).bootstrapModule(AppModule)
    .catch(err => console.log(err));
});
