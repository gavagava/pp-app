import { Component, Inject } from '@angular/core';
import { APP_CONFIG, IAppConfig } from './config/app.config';

@Component({
  selector: 'pp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'pp';

  constructor (@Inject(APP_CONFIG) private config: IAppConfig) {
    console.log(JSON.stringify(config));
  }
}
