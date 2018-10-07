import { Injectable } from '@angular/core';
import * as actionsPublication from '../actions/publicacion.actions';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { PublicacionCrudFirebaseService } from '../../app/servicios/publicaciones/publicacion-crud-firebase';
import { LOAD_PUBLICATION } from '../actions/publicacion.actions';
import { switchMap } from 'rxjs/operators';
import 'rxjs/add/observable/of';


@Injectable()
export class PublicacionEffects {

    @Effect()
    get_publicaciones$ = this.action$
        .ofType(actionsPublication.GET_PUBLICATION_ACTION).pipe(
            switchMap(() => this.publicacionService.getPublicacion()),
            switchMap((publicaciones) => {
                    console.log('publicaciones es', publicaciones);
                    return Observable.of(new actionsPublication.LoadPublicacion(publicaciones));
                })
        );



    constructor(private action$: Actions, private publicacionService: PublicacionCrudFirebaseService) { }
}
