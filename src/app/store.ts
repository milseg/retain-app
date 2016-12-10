/**
 * The logic implemented here helps us keep our state outside of our components
 */
import {BehaviorSubject} from 'rxjs/BehaviorSubject';//allows us to set a default state for the subject
import {Injectable} from '@angular/core';
import 'rxjs/Rx';

export interface Note{
  color: string,
  title: string,
  value: string,
  id?: string | number,
  createdAt?: string,
  updatedAt?: string,
  userId?: string
}

export interface User {
  id?: string
}

export interface State{
  notes: Note[],
  user: User
}

const defaultState: State = {
  notes: [],
  user: {}
}

const _store = new BehaviorSubject<State>(defaultState);

@Injectable()
export class Store {
  private store = _store;
  changes = this.store.asObservable()
                .distinctUntilChanged();//Filters observable changes. Only surface values when the new state is different from the old state
                //see: http://www.introtorx.com/Content/v1.0.10621.0/05_Filtering.html#Distinct
                //    http://reactivex.io/documentation/operators/distinct.html
  setState(state: State){
    this.store.next(state);
  }
  getState(): State {
    return this.store.value;//BehaviorSubject value property gives us the current value
  }
  purge() {
    return this.store.next(defaultState);
  }
};
