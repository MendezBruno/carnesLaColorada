import { Injectable } from '@angular/core';
import * as actionsUsers from '../actions/user.actions';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import { UserRepository } from '../../app/servicios/users/userRepository';
import { UserCrudFirebaseService } from '../../app/servicios/users/usuario-crud-firebase.service';


/**
 * Usar siempre los metodos de la interfaz del repository para dos cambiar facilmente el servicio que se injecta
 */
@Injectable()
export class UsersEffects {

    @Effect()
    get_users$ = this.action$
        .ofType(actionsUsers.GET_USERS_ACTION).pipe(
            switchMap(() => this.userRepository.getUser()),
            switchMap((users) => {
                    console.log('users es', users);
                    return Observable.of(new actionsUsers.LoadUser(users));
                })
        );



    constructor(private action$: Actions, private userRepository: UserCrudFirebaseService) { }
}
