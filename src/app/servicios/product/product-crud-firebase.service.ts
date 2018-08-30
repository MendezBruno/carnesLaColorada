import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ProductRepository } from './productRepository.service';
import { map } from 'rxjs/operators';
import { Product } from '../../modelo/producto';

const SEPARADOR = '/';

@Injectable()
export class ProductCrudFirebaseService implements ProductRepository {


  private dbPath = 'products';
  products: Observable<any[]>;
  public itemsRef: any;
  productoRef: any;
  public product: Product;
  public productes: Product[];

  constructor(private db: AngularFireDatabase) {

    this.itemsRef = this.db.list(this.dbPath);
    this.products = this.itemsRef.snapshotChanges().pipe(
      map((changes) =>  changes ),
      map(() => (c => ({ key: c.payload.key, ...c.payload.val() })) )
    );
      this.itemsRef.snapshotChanges(['child_added'])
          .subscribe(actions => {
            actions.forEach(action => {
              console.log(action.type);
              console.log(action.key);
              console.log(action.payload.val());
            });
          });

    }



    addInfoToPublicatino(key: string, productWithNewInfo: Product) {
      this.db.database.ref(this.dbPath + SEPARADOR + key).set(productWithNewInfo);
    }
    deleteEverything() {
      this.itemsRef.remove();
    }


    updateProduct(modifiedProduct: Product) {
      this.itemsRef.update(modifiedProduct.id, modifiedProduct);
    }
    addProduct(product: Product) {
      const refKey = this.itemsRef.push(product).key;
      console.log('Guarde el Producto');
      console.log(refKey);
      product.id = refKey;
      this.db.database.ref(this.dbPath + SEPARADOR + refKey).set(product);
    }
    deleteProduct(product: Product) {
      this.itemsRef.remove(product.id);
    }
    getProduct(): Observable<Product[]> {
      return this.db.list(this.dbPath).valueChanges() as Observable<Product[]>;
    }
    getProductById(id: any): Observable<Product> {
      throw new Error('Method not implemented.');
    }

  }