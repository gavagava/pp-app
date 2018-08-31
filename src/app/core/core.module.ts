import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './containers/app/app.component';
import { RouterEffects } from './effects/router.effects';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    EffectsModule.forFeature([RouterEffects])
  ],
  declarations: [AppComponent],
  exports: [AppComponent]
})
export class CoreModule {}
