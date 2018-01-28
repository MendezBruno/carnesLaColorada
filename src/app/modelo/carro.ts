import { Publicacion } from './publicacion';


export class Carro {

      id: string;
      userId: string;
      items: Item[] = [];

      constructor (userId: string) {
        this.userId = userId;
      }

      setItems(items: any[]): void {
         items.forEach(
         (item) => {this.items.push(item); }
       );
      }


      addItem(stock: number, publicacionId: string): Item {
        const item: Item = {stock: stock, publicacionId: publicacionId} ;
        console.log('voy hacer push de este item: ');
        console.log( item );
        this.items.push(item);
        return item;
      }

      haveThisPublication(publicacionId: string): boolean {
        return this.items.filter(item => item.publicacionId === publicacionId).length > 0;
      }


}



