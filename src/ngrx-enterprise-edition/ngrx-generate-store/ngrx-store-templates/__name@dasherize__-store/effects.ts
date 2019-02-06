import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { <%= classify(name) %>ActionTypes } from './actions';
import * as <%= decamelize(name) %>Actions from './actions';

@Injectable()
export class <%= classify(name) %>Effects {
  constructor(
    private action$: Actions
  ) {}
}
