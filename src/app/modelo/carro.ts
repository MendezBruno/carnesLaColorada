import { Publicacion } from './publicacion';
import { Item } from './Item';



export class Carro {

      id: string;
      userId: string;
      items: Item[] = [];

      constructor (userId?: string) {
        this.userId = userId;
      }

      addItem(stock: number, publicacionId: string): Item {
        const item: Item = new Item();
         item.stock = stock;
         item.publicacionId = publicacionId;
        console.log('voy hacer push de este item: ');
        console.log( item );
        this.items.push(item);
        return item;
      }

      haveThisPublication(publicacionId: string): boolean {
        return this.items.filter(item => item.publicacionId === publicacionId).length > 0;
      }


}



