import { Producto } from '../modelo/producto';

let asado:string[] = [
    '../../assets/imagenes/asado-tira.jpg',
    '../../assets/imagenes/carne-con-hueso.jpg',
    '../../assets/imagenes/Costillares.jpg'

  ]

export const UNPRODUCTO: Producto = {
    id: 1,
    nombre: 'Asado',
    precio: 110,
    fotos: asado,
    description: 'asado de ternera',
    cantidad: 20

  }


  