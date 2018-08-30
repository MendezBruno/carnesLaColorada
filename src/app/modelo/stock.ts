import { Product } from "./producto";

export class Stock{
    product: Product;
    stock: number;
    fecha: Date;

    constructor (product: Product, stock: number ) {
        this.fecha = new Date(Date.now());
        this.product = product;
        this.stock = stock;
    }

    increment(cant) {
        this.stock = this.stock + cant; 
    }

    decrement(cant) {
        this.stock = this.stock - cant; 
    }

}