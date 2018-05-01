import { Publicacion } from '../modelo/publicacion';
import { ImagenesStorage } from '../modelo/imagenesStorages';

const asado: ImagenesStorage[] = [
    // '../../assets/imagenes/asado-tira.jpg',
    // '../../assets/imagenes/carne-con-hueso.jpg',
    // '../../assets/imagenes/Costillares.jpg'

  ];

export const UNAPUBLICACION: Publicacion = {
    id: 'uno',
    fecha: Date(),
    tipoCantidad: 'kg',
    cantidad: 20,
    fotos: asado,
    activada: false,
    description: 'asado de ternera',
    titulo: 'Asado',
    precio: 110,
    stock: 10,
  };
