import { Observable } from "rxjs";
import { Product } from "../../modelo/producto";

/**
 * Product Repository
 * Interfaz para hacer pedidos request, por defecto devuelven Observable.
 * podrian devolver promesas
 */
export interface ProductRepository {

    /**
     * obtiene la lista de productos
     */
    getProduct(): Observable<Product[]>;

    /**
     * Obtiene una product con el id enviado
     * @param id string autogenereado que representa el id de la product
     */
    getProductById(id): Observable<Product>;
    
    /**
     * Agrega una product del tipo del parametro
     * @param product tipo Product
     */
    addProduct(product: Product);

    /**
     * Modifica una product del tipo del parametro
     * @param product tipo Product
     */
    updateProduct(product: Product );

    /**
     * Borra la product que coincide con la que se pasa por parametro
     * @param product tipo Product
     */
    deleteProduct(product: Product);
}