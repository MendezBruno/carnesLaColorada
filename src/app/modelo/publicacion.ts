import { Producto } from './producto';

export class Publicacion {

    id: Number;
    fecha: Date;
    productos: Producto[];
    activada: boolean;
    description: string;
    titulo: string;
    precio: string;

    constructor ( productos: Producto[], descripcion?: string, titulo?: string){
        this.fecha = new Date();
        this.productos = productos;
        this.precio = this.getPrecio();
        this.activada = false;
        this.description = descripcion;
        this.titulo = titulo;
    }

    getPrecio(): string{
        let precio: Number;
        for (let producto of this.productos) {
            precio =+ producto.precio;
        }
        return precio.toString()
    }
}
