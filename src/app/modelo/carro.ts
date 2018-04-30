import { Publicacion } from './publicacion';
import { Item } from './Item';



export class Carro {

      items: Item[];

      constructor (carroJson?: any) {
        this.items = carroJson ?  carroJson.items : [];
      }

      addItem(item): Item {
        console.log('voy hacer push de este item: ');
        this.items.push(item);
        return item;
      }
}



