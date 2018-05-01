import { Producto } from '../modelo/producto';

let asado:string[] = [
    '../../assets/imagenes/asado-tira.jpg',
    '../../assets/imagenes/carne-con-hueso.jpg',
    '../../assets/imagenes/Costillares.jpg'

  ]

export const PRODUCTOS: Producto[] = [{
    id: 1,
    nombre: 'Asado',
    precio: 110,
    fotos: asado,
    description: 'asado de ternera',
    cantidad: 20

  }, {
    id: 2,
    nombre: 'Asado',
    precio: 110,
    fotos: asado,
    description: 'asado de ternera',
    cantidad: 20

  },
  {
    id: 3,
    nombre: 'Asado',
    precio: 110,
    fotos: asado,
    description: 'asado de ternera',
    cantidad: 20

  },
  {
    id: 4,
    nombre: 'Asado',
    precio: 110,
    fotos: asado,
    description: 'asado de ternera',
    cantidad: 20

  } ]

