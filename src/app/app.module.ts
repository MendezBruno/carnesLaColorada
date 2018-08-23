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
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { UserCrudComponent } from './components/user-crud/user-crud.component';
import { AdminUsersComponent} from './components/admin/admin-users/admin-users.component';
import { LoginComponent } from './components/login/login.component';
import { FirebaseComponent } from './components/firebase/firebase.component';
import { TiendaComponent } from './components/tienda/tienda.component';



// servicios
import { UsuarioService } from './servicios/user-crud.service';
import { AutenticacionFirebaseService } from './servicios/autenticacionFirebase.service';

// Firebase  New imports to update based on AngularFire2 version 4
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule  } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import * as firebase from 'firebase';

// CARNICERIA APP COMPONENTS
import { ProductoComponent } from './components/producto/producto.component';
import { UsuarioCrudFirebaseService } from './servicios/usuario-crud-firebase.service';
import { ProductoCrudFirebaseService } from './servicios/producto-crud-firebase.service';
import { ConsolaAdminComponent } from './components/admin/consola-admin/consola-admin.component';
import { PublicacionAdminComponent } from './components/admin/publicacion-admin/publicacion-admin.component';
import { EditPublicacionComponent,
         EditPrecioPublicacionComponent,
         EditCantidadPublicacionComponent,
         DialogSelectPhotosComponent,
         DialogConfirmPublicacionComponent,
         EditStockPublicacionComponent} from './components/common-dialog/common-dialog.component';
import { CrudPublicacionComponent } from './components/admin/crud-publicacion/crud-publicacion.component';
import { PublicacionCrudFirebaseService } from './servicios/publicaciones/publicacion-crud-firebase';
import { PublicacionComponent } from './components/publicacion/publicacion.component';
import { CaruselComponent } from './components/carusel/carusel.component';
import { CommonDialogComponent } from './components/common-dialog/common-dialog.component';
import { MouseEditModeDirective } from './directives/mouse-edit-mode.directive';
import { SearchComponent } from './components/search/search.component';
import { PublicacionFilter } from './components/search/publicacion-filter';
import { CarritoService } from './servicios/carrito.service';
import { CarritoComponent } from './components/carrito/carrito.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


// reducers
import { carroReducer } from '../state/reducers/carro.reducer';
import { PublicacionEffects } from '../state/effects/publicacion.effects';
import { publicacionReducer } from '../state/reducers/publicacion.reducer';

export const firebaseConfig = {
  apiKey: 'AIzaSyCEH5CWZ0IlVb1vYS92vP3PmHN9uLis1Ao',
  authDomain: 'carniceria-app.firebaseapp.com',
  databaseURL: 'https://carniceria-app.firebaseio.com',
  projectId: 'carniceria-app',
  storageBucket: 'carniceria-app.appspot.com',
  messagingSenderId: '1011498024113'

};
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    InicioComponent,
    UserCrudComponent,
    AdminUsersComponent,
    LoginComponent,
    FirebaseComponent,
    ProductoComponent,
    TiendaComponent,
    ConsolaAdminComponent,
    PublicacionAdminComponent,
    CrudPublicacionComponent,
    DialogConfirmPublicacionComponent,
    EditPublicacionComponent,
    EditPrecioPublicacionComponent,
    EditCantidadPublicacionComponent,
    EditStockPublicacionComponent,
    DialogSelectPhotosComponent,
    PublicacionComponent,
    CaruselComponent,
    CommonDialogComponent,
    MouseEditModeDirective,
    SearchComponent,
    PublicacionFilter,
    CarritoComponent,


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
    StoreModule.forRoot({
      carro: carroReducer,
      publicacion: publicacionReducer
    }),
    EffectsModule.forRoot([PublicacionEffects]),
    StoreDevtoolsModule.instrument()

  ],
  providers: [
    UsuarioService,
    AutenticacionFirebaseService,
    UsuarioCrudFirebaseService,
    ProductoCrudFirebaseService,
    PublicacionCrudFirebaseService,
    CarritoService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogConfirmPublicacionComponent,
    EditPublicacionComponent,
    EditPrecioPublicacionComponent,
    EditCantidadPublicacionComponent,
    DialogSelectPhotosComponent,
    EditStockPublicacionComponent]
})
export class AppModule { }
