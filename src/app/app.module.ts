//Angular Base
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Routing
import { AppRoutingModule }  from './app-routing';

import { AppComponent } from './app.component';

//Componentes del sistema
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InicioComponent } from './inicio/inicio.component';
import { UserCrudComponent } from './user-crud/user-crud.component';
import { AdminUsersComponent} from './admin-users/admin-users.component';
import { LoginComponent } from './login/login.component';
import { FirebaseComponent } from './firebase/firebase.component';

//Angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule} from '@angular/material';

//servicios
import { UsuarioService } from './user-crud/user-crud.service';

//Firebase  New imports to update based on AngularFire2 version 4
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  storageBucket: "",
  messagingSenderId: ""
};

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    InicioComponent,
    UserCrudComponent,
    AdminUsersComponent,
    LoginComponent,
    FirebaseComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
