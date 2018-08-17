import { Publicacion } from "../../modelo/publicacion";
import { Observable } from "../../../../node_modules/rxjs";

/**
 * Publicacion Repository
 * Interfaz para hacer pedidos request, por defecto devuelven Observable.
 * podrian devolver promesas
 */
export interface PublicacionRepository {

    
    getPublicacion(): Observable<Publicacion>[];

    getPublicacionById(id): Observable<Publicacion>;
    
    addPublicacion(publicacion: Publicacion);

    updatePublicacion(publicacion: Publicacion );

    deletePublicacion(publicacion: Publicacion);
}