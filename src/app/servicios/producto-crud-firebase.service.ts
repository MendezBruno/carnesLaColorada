import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';


@Injectable()
export class ProductoCrudFirebaseService {

  private dbPath: string = '/productos';
  public itemRef : any;
  
  constructor(db: AngularFireDatabase) {
    this.itemRef = db.object(this.dbPath);
   }
  



}
