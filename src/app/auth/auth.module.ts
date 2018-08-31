import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { LocalesSwitchComponent } from './components/locales-switch';
import { LoginFormComponent } from './components/login-form';
import { LoginPageComponent } from './containers/login-page';
import { AauthEffects } from './effects/auth.effects';
import { reducers } from './reducers';
import { AuthService } from './services/auth.service';
import { SomService } from '../shared/services/som.service';

export const COMPONENTS = [
  LoginPageComponent,
  LoginFormComponent,
  LocalesSwitchComponent
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: 'login', component: LoginPageComponent }]),
    TranslateModule.forChild(),
    MatMenuModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RootAuthModule,
      providers: [ SomService, AuthService ]
    }
  }
}

@NgModule({
  imports: [
    AuthModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AauthEffects])
  ]
})
export class RootAuthModule {}
