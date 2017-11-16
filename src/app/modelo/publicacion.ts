import { Producto } from './producto';

export class Publicacion {

    id: Number;
    fecha: Date;
    //productos: Producto[];
    tipoCantidad: string;
    cantidad: number;
    fotos: any;
    activada: boolean;
    description: string;
    titulo: string;
    precio: number;

    constructor (tipoCantidad: string, cantidad: number, fotos: any, precio: number , descripcion?: string, titulo?: string){
        this.fecha = new Date();
        this.tipoCantidad = tipoCantidad;
        this.cantidad = cantidad;
        this.fotos = fotos;
        this.precio = precio;
        this.activada = false;
        this.description = descripcion;
        this.titulo = titulo;
    }

    // getPrecio(): string{
    //     let precio: Number;
    //     for (let producto of this.productos) {
    //         precio =+ producto.precio;
    //     }
    //     return precio.toString()
    // }
}
