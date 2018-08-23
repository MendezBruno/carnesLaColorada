import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { InicioComponent } from './vista/inicio/inicio.component';
import { UserCrudComponent } from './vista/user-crud/user-crud.component';
import { AdminUserComponent } from './vista/admin/admin-user/admin-user.component';
import { LoginUserComponent } from './vista/login-user/login-user.component';
import { ProductoComponent } from './components/producto/producto.component';
import { TiendaComponent } from './vista/tienda/tienda.component';
import { LoginComponent } from './vista/admin/login/login.component';
import { ConsolaAdminComponent } from './vista/admin/consola-admin/consola-admin.component';
import { PublicacionAdminComponent } from './vista/admin/publicacion-admin/publicacion-admin.component';
import { CrudPublicacionComponent } from './vista/admin/crud-publicacion/crud-publicacion.component';
import { CarritoComponent } from './vista/carrito/carrito.component';



const appRoutes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full'},
    { path: 'inicio', component: InicioComponent},
    { path: 'user', component: UserCrudComponent},
    { path: 'adminusers', component: AdminUserComponent},
    { path: 'login', component: LoginUserComponent},
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
