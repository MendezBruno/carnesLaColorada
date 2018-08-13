import { Injectable } from '../../../node_modules/@angular/core';
import { Actions, Effect } from '@ngrx/effects';



@Injectable()
export class PublicacionEffects {

@Effect()
get_publicaciones = this.action$;



constructor( private action$: Actions ) {}
}
