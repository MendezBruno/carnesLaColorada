import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AdminUser } from '../modelo/templeteUser/adminUser';
import { Observable } from 'rxjs';

const SEPARADOR = '/';

@Injectable({
  providedIn: 'root'
})
export class AdminUserFirebaseService {

  dbPath = 'admin/profile';

  constructor(public afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase) {
    console.log('Hello UsuariosProvider Provider');
  }

  setAdmin(adminUser: AdminUser): Promise<void> {
    const itemRef = this.afDatabase.object(this.dbPath + SEPARADOR + adminUser.uid);
    return itemRef.set(adminUser);
  }

  updateAdmin(aNewAdminUserInfo: AdminUser): Promise<void> {
    const itemRef = this.afDatabase.object(this.dbPath);
    return itemRef.update(aNewAdminUserInfo);
  }

  getAdminUser(uid): Observable<AdminUser> {
    return this.afDatabase.object(this.dbPath + SEPARADOR + uid ).valueChanges() as Observable<AdminUser>;
  }

}


