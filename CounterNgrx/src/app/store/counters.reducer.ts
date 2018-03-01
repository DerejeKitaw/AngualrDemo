import * as counterActions from './counters.actions';
import { Action } from '@ngrx/store';
// import { AppAction } from '../app.action';
// import { INCREMENT, DECREMENT, RESET } from './counters.actions';


interface AppState {
    count: number;
  }

const initialState: AppState = {
count: 0
}

export function counterReducer(state = initialState, action: Action) {
    switch (action.type) {
      case counterActions.INCREMENT:
        return initialState.count + 1;
  
      case counterActions.DECREMENT:
        return initialState.count - 1;
  
      case counterActions.RESET:
        return 0;
  
      default:
        return initialState.count;
    }
  }