import { Action } from '@ngrx/store';
import { User } from '../../app/modelo/templeteUser/usuario';
// Section 2
export const ADD_USER       = 'Add';
export const REMOVE_USER    = 'Remove';
export const LOAD_USERS = 'LoadAll';
export const GET_USERS_ACTION = 'GetUser';

export const LOAD_CURRENT_USER = 'LoadCurrentUser';

export class EffectGetUsersAction implements Action {
    readonly type = GET_USERS_ACTION;

    constructor() {}
}

export class LoadUser implements Action {
    readonly type = LOAD_USERS;

    constructor(public payload: User[]) {}
}

export class LoadCurrentUser implements Action {
    readonly type = LOAD_CURRENT_USER;
    public payload: string;
    constructor (public uid: string ) {
        this.payload = uid;
    }
}

// Section 3
export class AddUser implements Action {
    readonly type = ADD_USER;

    constructor(public payload: User) {}
}

export class RemoveUser implements Action {
    readonly type = REMOVE_USER;
    public payload: Number;
    constructor(public idexItem: Number) {
        this.payload = idexItem;
    }
}

// Section 4
export type ActionsUser = AddUser | RemoveUser | LoadUser;
