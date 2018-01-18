import { Publicacion } from './publicacion';
 

export class Carro {

      id: string;
      userId: string;
      items: Item[] = [];

      constructor (userId: string) {
        this.userId = userId;
      }

      addItem(stock: number, publicacionId: string) {
        const item: Item = {stock: stock, publicacionId: publicacionId} ;
        console.log('voy hacer push de este item: ');
        console.log( item );
        this.items.push(item);
      }

      haveThisPublication(publicacionId: string): boolean {
        return this.items.filter(item => item.publicacionId === publicacionId).length > 0;
      }
}


interface Item {
  stock: number;
  publicacionId: string;
}


