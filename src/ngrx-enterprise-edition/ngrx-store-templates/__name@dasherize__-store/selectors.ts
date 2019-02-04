import { State } from './state';
import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';


export const select<%= classify(name) %>State: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('<%= decamelize(name) %>');
