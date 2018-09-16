import { Observable } from 'rxjs';
import { User } from '../../modelo/usuario';


/**
 * User Repository
 * Interfaz para hacer pedidos request, por defecto devuelven Observable.
 * podrian devolver promesas
 */
export interface UserRepository {

    /**
     * obtiene la lista de useres
     */
    getUser(): Observable<User[]>;

    /**
     * Obtiene un usuario con el id enviado
     * @param id string autogenereado que representa el id de la user
     */
    getUserById(id): Observable<User>;

    /**
     * Agrega un usuario del tipo del parametro
     * @param user tipo User
     */
    addUser(user: User);

    /**
     * Modifica un usuarios del tipo del parametro
     * @param user tipo User
     */
    updateUser(user: User );

    /**
     * Borra el user que coincide con la que se pasa por parametro
     * @param user tipo User
     */
    deleteUser(user: User);
}
