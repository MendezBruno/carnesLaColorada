import { Injectable } from '@angular/core';
import * as actionsPublication from '../actions/publicacion.actions';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { PublicacionCrudFirebaseService } from '../../app/servicios/publicaciones/publicacion-crud-firebase';
import { LOAD_PUBLICATION } from '../actions/publicacion.actions';



@Injectable()
export class PublicacionEffects {

@Effect()
get_publicaciones$ = this.action$
.ofType(actionsPublication.GET_PUBLICATION_ACTION)
.switchMap( () => {
     return this.publicacionService.obtenerListaDePublicaciones()
    .switchMap( (publicaciones) => {
        console.log('publicaciones es', publicaciones);
        return Observable.of(new actionsPublication.LoadPublicacion(publicaciones));
    //  return new ;
    }
    );
});



constructor( private action$: Actions, private publicacionService: PublicacionCrudFirebaseService ) {}
}
