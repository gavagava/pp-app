import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';

import { reducers } from './reducers';
import { AuthService } from './services/auth.service';
import { LoginPageComponent } from './containers/login-page';
import { LoginFormComponent } from './components/login-form';
import { LocalesSwitchComponent } from './components/locales-switch';

export const COMPONENTS = [
  LoginPageComponent,
  LoginFormComponent,
  LocalesSwitchComponent
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule.forChild()
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RootAuthModule,
      providers: [ AuthService ]
    }
  }
}

@NgModule({
  imports: [
    AuthModule,
    RouterModule.forChild([{ path: 'login', component: LoginPageComponent }]),
    StoreModule.forFeature('auth', reducers)
  ]
})
export class RootAuthModule {}
