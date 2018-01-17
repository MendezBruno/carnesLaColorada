import { Publicacion } from './publicacion';

export class Carro {

      id: string;
      userId: string;
      stock: number;
      publicacion: Publicacion;

      constructor (userId: string) {
        this.userId = userId;
      }
}
