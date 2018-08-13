
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as carroActions from '../actions/carro.actions';
import { CarroState } from '../../app/app.states';
import { Carro } from '../../app/modelo/carro';
import { Item } from '../../app/modelo/Item';

export const initialState: CarroState = {carro: new Carro()};

export function carroReducer(state = initialState, action: carroActions.ActionsCarro): CarroState {
  switch (action.type) {

    case carroActions.ADD_ITEM: {
      state.carro.items.push(<Item>action.payload);
      return state;
    }
    case carroActions.REMOVE_ITEM: {
      state.carro.items.splice(<number>action.payload, 1);
      return state;

    }
    default: {
      return state;
    }
  }
}

