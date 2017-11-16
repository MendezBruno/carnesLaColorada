import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InicioComponent } from './inicio/inicio.component';
import { UserCrudComponent } from './user-crud/user-crud.component';
import { AdminUsersComponent} from './admin-users/admin-users.component';
import { LoginComponent } from './login/login.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { ProductoComponent } from './producto/producto.component';
import { TiendaComponent } from './tienda/tienda.component';
import { ConsolaAdminComponent } from './consola-admin/consola-admin.component';
import { PublicacionAdminComponent } from './publicacion-admin/publicacion-admin.component';
import { CrudPublicacionComponent } from './crud-publicacion/crud-publicacion.component';


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
    { path: 'admin/nuevaPublicacion', component: CrudPublicacionComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes)],  //Para debug],
    exports: [ RouterModule ]
  })
export class AppRoutingModule {}
