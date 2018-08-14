
import * as publicacionActions from '../actions/publicacion.actions';
import { PublicacionState } from '../../app/app.states';
import { Publicacion } from '../../app/modelo/publicacion';

export const initialState:
  PublicacionState = {
  publicaciones: [],
  load: false,
  loading: false,
};

export function publicacionReducer(state = initialState, action: publicacionActions.ActionsPublicacion): PublicacionState {
  switch (action.type) {

    case publicacionActions.ADD_PUBLICACION: {
      state.publicaciones.push(<Publicacion>action.payload);
      return state;
    }
    case publicacionActions.REMOVE_PUBLICACION: {
      state.publicaciones.splice(<number>action.payload, 1);
      return state;

    }

    case publicacionActions.LOAD_PUBLICATION: {
      console.log('load es', action.payload);
      return {
        ...state,
        publicaciones: action.payload,
        load: true
      };
    }

    default: {
      return state;
    }
  }
}

