import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InicioComponent } from './inicio/inicio.component';
import { UserCrudComponent } from './user-crud/user-crud.component';
import { AdminUsersComponent} from './admin-users/admin-users.component';
import { LoginComponent } from './login/login.component';
import { FirebaseComponent } from './firebase/firebase.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full'},
    { path: 'inicio', component: InicioComponent},
    { path: 'user', component: UserCrudComponent},
    { path: 'adminusers', component: AdminUsersComponent},
    { path: 'login', component: FirebaseComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes)],  //Para debug],
    exports: [ RouterModule ]
  })
export class AppRoutingModule {} 