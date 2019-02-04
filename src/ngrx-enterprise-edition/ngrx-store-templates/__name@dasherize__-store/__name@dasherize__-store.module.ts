import { featureReducer } from './reducer';
import { <%= classify(name) %>Effects } from './effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('<%= decamelize(name) %>', featureReducer)
    EffectsModule.forFeature([<%= classify(name) %>Effects]),
  ],
    providers: [<%= classify(name) %>Effects],
  declarations: []
})
export class <%= classify(name) %>StoreModule {}
