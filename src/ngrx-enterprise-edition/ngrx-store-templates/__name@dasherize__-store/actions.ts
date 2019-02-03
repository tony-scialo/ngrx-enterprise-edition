import { Action } from '@ngrx/store';

export enum <%= classify(name) %>ActionTypes {
  SOME_ACTION = '[<%= classify(name) %>_STORE] SOME_ACTION'
}

export class SomeAction implements Action {
  readonly type = <%= classify(name) %>ActionTypes.SOME_ACTION;
  constructor(public payload: boolean) {}
}
