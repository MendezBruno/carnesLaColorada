import { typeProduct } from "./typeProduct";
import { ImagenesStorage } from "./imagenesStorages";

export class Product {
    id: string;
    cod: number;
    name: string;
    type: typeProduct;
    precio: number;
    vendidos: number;
    stock: number;
    fotos: ImagenesStorage[]
    kg: number;
    docenas: number;
    
    constructor ( cod: number,
        name: string,
        type: typeProduct,
        stock: number,
        precio?: number,
        kg?: number,
        docenas?: number,
    ) { 
        this.name = name;
        this.type = type;
        this.stock = stock;
        this.precio = precio;
        this.kg = kg;
        this.docenas  = docenas;
        this.fotos = [];
    }

    equals(product: Product): boolean {
        return product.cod == this.cod; 
    }
    
    tieneFotos(): any {
        return !!this.fotos && this.fotos.length > 0;
    }
    
}
