import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { UserCrudComponent } from './components/user-crud/user-crud.component';
import { AdminUsersComponent} from './components/admin/admin-users/admin-users.component';
import { LoginComponent } from './components/login/login.component';
import { FirebaseComponent } from './components/firebase/firebase.component';
import { ProductoComponent } from './components/producto/producto.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ConsolaAdminComponent } from './components/admin/consola-admin/consola-admin.component';
import { PublicacionAdminComponent } from './components/admin/publicacion-admin/publicacion-admin.component';
import { CrudPublicacionComponent } from './components/admin/crud-publicacion/crud-publicacion.component';
import { CarritoComponent } from './components/carrito/carrito.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full'},
    { path: 'inicio', component: InicioComponent},
    { path: 'user', component: UserCrudComponent},
    { path: 'adminusers', component: AdminUsersComponent},
    { path: 'firebase', component: FirebaseComponent},
    { path: 'admin/producto', component: ProductoComponent},
    { path: 'tienda', component: TiendaComponent},
    { path: 'admin/login', component: LoginComponent},
    { path: 'admin/consola', component: ConsolaAdminComponent},
    { path: 'admin/publicacion', component: PublicacionAdminComponent},
    { path: 'admin/nuevaPublicacion', component: CrudPublicacionComponent},
    { path: 'carrito', component: CarritoComponent},
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes)],  // Para debug],
    exports: [ RouterModule ]
  })
export class AppRoutingModule {}
