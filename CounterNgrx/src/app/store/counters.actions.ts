import {Action} from '@ngrx/store';
import {Counter} from '../shared/counter';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

/****************************************
 * INCREMENT number
 ****************************************/
export class Increment implements Action {
    readonly type = INCREMENT;
  }
/****************************************
 * DECREMENT number
 ****************************************/
export class Decrement implements Action {
    readonly type = DECREMENT;
  }
/****************************************
 * RESET number
 ****************************************/
export class Reset implements Action {
    readonly type = RESET;
  }
  