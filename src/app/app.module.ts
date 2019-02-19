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
import { UsuarioService } from './servicios/users/user-crud.service';
import { AutenticacionFirebaseService } from './servicios/autenticacionFirebase.service';

// Firebase  New imports to update based on AngularFire2 version 4
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule  } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// import * as firebase from 'firebase'; por el momento no se utiliza

// CARNICERIA APP COMPONENTS
import { UserCrudFirebaseService } from './servicios/users/usuario-crud-firebase.service';
import { ProductoCrudFirebaseService } from './servicios/producto-crud-firebase.service';

import { EditPublicacionComponent,
         EditPrecioPublicacionComponent,
         EditCantidadPublicacionComponent,
         DialogSelectPhotosComponent,
         EditStockPublicacionComponent,
         UserModalComponent,
         DialogConfirmComponent} from './components/common-dialog/common-dialog.component';

import { PublicacionComponent } from './components/publicacion/publicacion.component';
import { CaruselComponent } from './components/carusel/carusel.component';
import { CommonDialogComponent } from './components/common-dialog/common-dialog.component';
import { MouseEditModeDirective } from './directives/mouse-edit-mode.directive';
import { SearchComponent } from './components/search/search.component';
import { PublicacionFilter } from './components/search/publicacion-filter';
import { CarritoService } from './servicios/carrito.service';
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
import { PublicacionCrudFirebaseService } from './servicios/publicaciones/publicacion-crud-firebase';


// reducers
import { carroReducer } from '../state/reducers/carro.reducer';
import { PublicacionEffects } from '../state/effects/publicacion.effects';
import { publicacionReducer } from '../state/reducers/publicacion.reducer';


import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { interceptorBackendServiceResponse } from './servicios/interceptor.service';
import { TestComponent } from './test/test.component';
import { AdminPedidosComponent } from './vista/admin/admin-pedidos/admin-pedidos.component';
import { AdminMensajesComponent } from './vista/admin/admin-mensajes/admin-mensajes.component';
import { PedidosComponent } from './vista/pedidos/pedidos.component';
import { MensajesComponent } from './vista/mensajes/mensajes.component';
import { CalendarComponent } from './vista/admin/calendar/calendar.component';

// calendario modules
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    InicioComponent,
    UserCrudComponent,
    AdminUserComponent,
    LoginComponent,
    LoginUserComponent,
    TiendaComponent,
    ConsolaAdminComponent,
    PublicacionAdminComponent,
    CrudPublicacionComponent,
    EditPublicacionComponent,
    EditPrecioPublicacionComponent,
    EditCantidadPublicacionComponent,
    EditStockPublicacionComponent,
    DialogSelectPhotosComponent,
    UserModalComponent,
    DialogConfirmComponent,
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
    TestComponent,
    MensajesComponent,
    AdminPedidosComponent,
    AdminMensajesComponent,
    CalendarComponent,


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
    StoreModule.forRoot({
      carro: carroReducer,
      publicacion: publicacionReducer
    }),
    EffectsModule.forRoot([PublicacionEffects]),
    StoreDevtoolsModule.instrument(),
    // calendario imports
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
    // fin calendario.

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: interceptorBackendServiceResponse,
      multi: true
    },
    UsuarioService,
    AutenticacionFirebaseService,
    UserCrudFirebaseService,
    ProductoCrudFirebaseService,
    PublicacionCrudFirebaseService,
    CarritoService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    EditPublicacionComponent,
    EditPrecioPublicacionComponent,
    EditCantidadPublicacionComponent,
    DialogSelectPhotosComponent,
    EditStockPublicacionComponent,
    UserModalComponent,
    DialogConfirmComponent]
})
export class AppModule { }
