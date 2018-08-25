import { ImagenesStorage } from './imagenesStorages';



export class Publicacion {
 
    id: string;
    fecha: string;
    tipoCantidad: string;
    cantidad: number;
    fotos: ImagenesStorage[] = [];
    activada: boolean;
    description: string;
    titulo: string;
    precio: number;
    stock: number;


    constructor (
      tipoCantidad?: string,
      cantidad?: number,
      precio?: number,
      stock?: number,
      fotos?: any,
      descripcion?: string,
      titulo?: string) {
        this.fecha = Date(); // en el momento que se necesite usar la fecha se puede usar como new Date(this.fecha)
        this.tipoCantidad = tipoCantidad;
        this.cantidad = cantidad;
        this.fotos = fotos;
        this.precio = precio;
        this.activada = false;
        this.description = descripcion;
        this.titulo = titulo;
        this.stock = stock;
    }


    tieneFotos(): boolean {
      return  !!this.fotos && this.fotos.length > 0;
    }
       // !!this.lala && (this.lala.length > 0)
}
