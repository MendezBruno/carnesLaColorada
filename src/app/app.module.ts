// Angular Base
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatButton, MatToolbarModule} from '@angular/material';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
// Material

// Routing
import { AppRoutingModule } from './app-routing';

import { AppComponent } from './app.component';

// Componentes del sistema
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InicioComponent } from './inicio/inicio.component';
import { UserCrudComponent } from './user-crud/user-crud.component';
import { AdminUsersComponent} from './admin-users/admin-users.component';
import { LoginComponent } from './login/login.component';
import { FirebaseComponent } from './firebase/firebase.component';



// servicios
import { UsuarioService } from './servicios/user-crud.service';
import { AutenticacionFirebaseService } from './servicios/autenticacionFirebase.service'

// Firebase  New imports to update based on AngularFire2 version 4
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule  } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ProductoComponent } from './producto/producto.component';
import { UsuarioCrudFirebaseService } from './servicios/usuario-crud-firebase.service';

export const firebaseConfig = {
  apiKey: 'AIzaSyCEH5CWZ0IlVb1vYS92vP3PmHN9uLis1Ao',
  authDomain: 'carniceria-app.firebaseapp.com',
  databaseURL: 'https://carniceria-app.firebaseio.com',
  projectId: 'carniceria-app',
  storageBucket: 'carniceria-app.appspot.com',
  messagingSenderId: '1011498024113'

};

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    InicioComponent,
    UserCrudComponent,
    AdminUsersComponent,
    LoginComponent,
    FirebaseComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,

  ],
  providers: [
    UsuarioService,
    AutenticacionFirebaseService,
    UsuarioCrudFirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
