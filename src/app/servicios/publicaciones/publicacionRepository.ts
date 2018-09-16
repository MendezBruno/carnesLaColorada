import { Observable } from 'rxjs';
import { Publicacion } from '../../modelo/publicacion';


/**
 * Publicacion Repository
 * Interfaz para hacer pedidos request, por defecto devuelven Observable.
 * podrian devolver promesas
 */
export interface PublicacionRepository {

    /**
     * obtiene la lista de publicaciones
     */
    getPublicacion(): Observable<Publicacion[]>;

    /**
     * Obtiene una publicacion con el id enviado
     * @param id string autogenereado que representa el id de la publicacion
     */
    getPublicacionById(id): Observable<Publicacion>;

    /**
     * Agrega una publicacion del tipo del parametro
     * @param publicacion tipo Publicacion
     */
    addPublicacion(publicacion: Publicacion);

    /**
     * Modifica una publicacion del tipo del parametro
     * @param publicacion tipo Publicacion
     */
    updatePublicacion(publicacion: Publicacion );

    /**
     * Borra la publicacion que coincide con la que se pasa por parametro
     * @param publicacion tipo Publicacion
     */
    deletePublicacion(publicacion: Publicacion);
}
