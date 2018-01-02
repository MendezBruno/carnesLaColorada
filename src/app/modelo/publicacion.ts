

export class Publicacion {

    id: Number;
    fecha: string;
    tipoCantidad: string;
    cantidad: number;
    fotos: any;
    activada: boolean;
    description: string;
    titulo: string;
    precio: number;

    constructor (tipoCantidad: string, cantidad: number, precio: number , fotos?: any, descripcion?: string, titulo?: string){
        this.fecha = Date(); //en el momento que se necesite usar la fecha se puede usar como new Date(this.fecha)
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
