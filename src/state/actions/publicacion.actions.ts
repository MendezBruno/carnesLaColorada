import { Action } from '@ngrx/store';
import { Publicacion } from '../../app/modelo/publicacion';
// Section 2
export const ADD_PUBLICACION       = 'Add';
export const REMOVE_PUBLICACION    = 'Remove';

// Section 3
export class AddPublicacion implements Action {
    readonly type = ADD_PUBLICACION;

    constructor(public payload: Publicacion) {}
}

export class RemovePublicacion implements Action {
    readonly type = REMOVE_PUBLICACION;
    public payload: Number;
    constructor(public idexItem: Number) {
        this.payload = idexItem;
    }
}

// Section 4
export type ActionsPublicacion = AddPublicacion | RemovePublicacion;
