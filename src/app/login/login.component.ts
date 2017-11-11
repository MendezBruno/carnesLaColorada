import { Component, OnInit } from '@angular/core';
import { AutenticacionFirebaseService } from '../servicios/autenticacionFirebase.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  
  

   model:any={};

  constructor(private mFirebaseBD: AutenticacionFirebaseService,
              private router: Router,
              public snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  loginAdmin(){
    this.mFirebaseBD.loginAdmin(this.model.userName, this.model.password)
                    .then(( this.irConsolaAdmin() ))
                    .catch( this.informarNoConexion())
  }

  irConsolaAdmin(): any {
    this.router.navigate(['/admin/consola'])
  }

  informarNoConexion(): any {
     this.snackbar.open('Hubo un error al intentar ingresar');
  }

}
