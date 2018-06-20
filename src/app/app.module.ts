// Angular Base
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

// Variable de entorno
import { environment } from '../environments/environment';

// Routing
import { AppRoutingModule } from './app-routing';

import { AppComponent } from './app.component';

// Componentes del sistema
import { NavBarComponent } from './components/nav-bar/nav-bar.component';



// servicios
import { UsuarioService } from './servicios/user-crud.service';
import { AutenticacionFirebaseService } from './servicios/autenticacionFirebase.service';

// Firebase  New imports to update based on AngularFire2 version 4
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule  } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// import * as firebase from 'firebase'; por el momento no se utiliza

// CARNICERIA APP COMPONENTS
import { ProductoComponent } from './components/producto/producto.component';
import { UsuarioCrudFirebaseService } from './servicios/usuario-crud-firebase.service';
import { ProductoCrudFirebaseService } from './servicios/producto-crud-firebase.service';

import { EditPublicacionComponent,
         EditPrecioPublicacionComponent,
         EditCantidadPublicacionComponent,
         DialogSelectPhotosComponent,
         DialogConfirmPublicacionComponent,
         EditStockPublicacionComponent } from './components/common-dialog/common-dialog.component';

import { PublicacionCrudFirebaseService } from './servicios/publicacion-crud-firebase';
import { PublicacionComponent } from './components/publicacion/publicacion.component';
import { CaruselComponent } from './components/carusel/carusel.component';
import { CommonDialogComponent } from './components/common-dialog/common-dialog.component';
import { MouseEditModeDirective } from './directives/mouse-edit-mode.directive';
import { SearchComponent } from './components/search/search.component';
import { PublicacionFilter } from './components/search/publicacion-filter';
import { CarritoService } from './servicios/carrito.service';
import { PedidosComponent } from './vista/admin/pedidos/pedidos.component';
import { LoginUserComponent } from './vista/login-user/login-user.component';
import { LoginComponent } from './vista/admin/login/login.component';
import { AdminUserComponent } from './vista/admin/admin-user/admin-user.component';
import { InicioComponent } from './vista/inicio/inicio.component';
import { UserCrudComponent } from './vista/user-crud/user-crud.component';
import { TiendaComponent } from './vista/tienda/tienda.component';
import { PublicacionAdminComponent } from './vista/admin/publicacion-admin/publicacion-admin.component';
import { ConsolaAdminComponent } from './vista/admin/consola-admin/consola-admin.component';
import { CrudPublicacionComponent } from './vista/admin/crud-publicacion/crud-publicacion.component';
import { CarritoComponent } from './vista/carrito/carrito.component';





@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    InicioComponent,
    UserCrudComponent,
    AdminUserComponent,
    LoginComponent,
    LoginUserComponent,
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
    PedidosComponent,
    LoginUserComponent,
    AdminUserComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,

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
