import { Product } from "./producto";

export class Item {
  product: Product;
  cant: number;
  precio: number;
  fecha: Date;

  constructor (product: Product , cant: number, precio?: number) {
    this.product = product;
    this.cant = cant;
    this.precio = precio;
    this.fecha = new Date(Date.now());
   }

/**
 * Math.random should be unique because of its seeding algorithm.
 * Convert it to base 36 (numbers + letters), and grab the first 9 characters
 * after the decimal.
 */
   generateId(): string {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

}
