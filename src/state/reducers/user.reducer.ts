import * as usersActions from '../actions/user.actions';
import { UserState } from '../../app/app.states';
import { User } from '../../app/modelo/usuario';

export const initialState:
  UserState = {
  users: [],
  load: false,
  loading: false,
};

export function usersReducer(state = initialState, action: usersActions.ActionsUser): UserState {
  switch (action.type) {

    case usersActions.ADD_USER: {
      state.users.push(<User>action.payload);
      return state;
    }
    case usersActions.REMOVE_USER: {
      state.users.splice(<number>action.payload, 1);
      return state;

    }

    case usersActions.LOAD_USERS: {
      console.log('load es', action.payload);
      return {
        ...state,
        users: action.payload,
        load: true
      };
    }

    default: {
      return state;
    }
  }
}

