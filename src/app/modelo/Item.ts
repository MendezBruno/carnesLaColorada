export class Item {
  id: string;
  stock: number;
  publicacionId: string;

  constructor (cantidad: number, idPublicacion: string) {
    this.id = this.generateId();
    this.stock = cantidad;
    this.publicacionId = idPublicacion;
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
