import { ImagenesStorage } from './imagenesStorages';
import { Item } from './item';
import { map } from 'rxjs-compat/operator/map';
import { ArrayUtils } from '../utils/arrayUtils';



export class Publicacion {

    id: string;
    fecha: string;
    items: Item[];
    activada: boolean;
    description: string;
    titulo: string;
    precio: number;
    descuento: number;


    constructor(
        items: Item[],
        descripcion?: string,
        titulo?: string) {
            
        this.id = this.generateId();
        this.fecha = Date(); // en el momento que se necesite usar la fecha se puede usar como new Date(this.fecha)
        this.items = items;
        this.precio = this.getPrecio();
        this.activada = false;
        this.description = descripcion;
        this.titulo = titulo;
    }


    tieneFotos(): boolean {
       
        return ArrayUtils.anySatisfy(this.items, (item:Item) => { item.product.tieneFotos(); } )
    }
    // !!this.lala && (this.lala.length > 0)

    /**
     * Math.random should be unique because of its seeding algorithm.
     * Convert it to base 36 (numbers + letters), and grab the first 9 characters
     * after the decimal.
     */
    generateId(): string {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    getPrecio(): number {
        let precio = 0;
        this.items.map(item => precio = precio + item.precio);
        return precio;
    }
}
