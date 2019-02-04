import { featureReducer } from './reducer';
// import { TerminalEffects } from './effects';
// import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('<%= decamelize(name) %>', featureReducer)
    // EffectsModule.forFeature([TerminalEffects])
  ],
  //   providers: [TerminalEffects],
  declarations: []
})
export class <%= classify(name) %>StoreModule {}
