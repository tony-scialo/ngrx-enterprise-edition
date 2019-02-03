import { initialState, State } from './state';
import { <%= classify(name) %>Actions, <%= classify(name) %>ActionTypes } from './actions';

export function featureReducer(state = initialState, action: <%= classify(name) %>Actions) {
  switch (action.type) {
    case <%= classify(name) %>ActionTypes.SOME_ACTION:
      return someAction(state);
    default:
      return state;
  }
}

function someAction(state: State) {
    return {
      ...state
    };
}
