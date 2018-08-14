import { Action } from '@ngrx/store';
import { Publicacion } from '../../app/modelo/publicacion';
// Section 2
export const ADD_PUBLICACION       = 'Add';
export const REMOVE_PUBLICACION    = 'Remove';
export const GET_PUBLICATION_ACTION = 'GetPublicationAction';
export const LOAD_PUBLICATION = 'load';

// Section 3
export class AddPublicacion implements Action {
    readonly type = ADD_PUBLICACION;

    constructor(public payload: Publicacion) {}
}

export class EffectGetPublicationsAction implements Action {
    readonly type = GET_PUBLICATION_ACTION;

    constructor() {}
}


export class RemovePublicacion implements Action {
    readonly type = REMOVE_PUBLICACION;
    public payload: Number;
    constructor(public idexItem: Number) {
        this.payload = idexItem;
    }
}

export class LoadPublicacion implements Action {
    readonly type = LOAD_PUBLICATION;

    constructor(public payload: Publicacion[]) {}
}



// Section 4
export type ActionsPublicacion = AddPublicacion | RemovePublicacion | LoadPublicacion;
