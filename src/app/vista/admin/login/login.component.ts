import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { AutenticacionFirebaseService } from '../../../servicios/autenticacionFirebase.service';
import { User } from 'firebase';
import { UserCrudFirebaseService } from '../../../servicios/users/usuario-crud-firebase.service';
import { AdminUserFirebaseService } from '../../../servicios/admin-user-firebase.service';
import { AdminUser } from '../../../modelo/templeteUser/adminUser';
import { map } from 'rxjs/internal/operators/map';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {




   model: any = {};

  constructor(private mFirebaseBD: AutenticacionFirebaseService,
              private adminUserfirebase: AdminUserFirebaseService,
              private router: Router,
              public snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  loginAdmin() {
    this.mFirebaseBD.loginAdmin(this.model.userName, this.model.password)
                    .then( (fuser: firebase.auth.UserCredential) => {
                      this.incializarAdmin(fuser.user);
                      this.irConsolaAdmin(); } )
                    .catch( (e) => {this.informarNoConexion(e); });
  }

  incializarAdmin(fuser: User): any {
    this.adminUserfirebase.getAdminUser(fuser.uid).pipe(
      map( (adminUser: AdminUser) => {
        localStorage.setItem('currentUser', JSON.stringify(adminUser));
      })
    );
  }

  irConsolaAdmin(): any {
    this.router.navigate(['/admin/consola']);
  }

  informarNoConexion(e): any {
     this.snackbar.open('Hubo un error al intentar ingresar: ' + e);
  }

}
