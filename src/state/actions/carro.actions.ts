import { Action } from '@ngrx/store';
import { Carro } from '../../app/modelo/carro';
import { Item } from '../../app/modelo/Item';
// Section 2
export const ADD_ITEM       = 'Add';
export const REMOVE_ITEM    = 'Remove';

// Section 3
export class AddItem implements Action {
    readonly type = ADD_ITEM;

    constructor(public payload: Item) {}
}

export class RemoveItem implements Action {
    readonly type = REMOVE_ITEM;
    public payload: Number;
    constructor(public idexItem: Number) {
        this.payload = idexItem;
    }
}

// Section 4
export type ActionsCarro = AddItem | RemoveItem;
