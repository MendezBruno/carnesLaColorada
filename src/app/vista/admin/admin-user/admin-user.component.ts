import { Component, OnInit } from '@angular/core';
import { User } from '../../../modelo/templeteUser/usuario';
import { MatDialogRef, MatDialog } from '@angular/material';
import { UserModalComponent, DialogConfirmComponent } from '../../../components/common-dialog/common-dialog.component';
import { ConfirmDialogModel } from '../../../components/common-dialog/models-data/confirmDialogModel';
import { UserCrudFirebaseService } from '../../../servicios/users/usuario-crud-firebase.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
  title = 'Crear o Modificar';
  user = new User();
  users: User[];
  errorMessage: any;



  constructor(private userService: UserCrudFirebaseService, public dialog: MatDialog) {
    console.log('estoy para pedir usuarios');
    this.getAllUsers();
  }

  ngOnInit() {
  }


  /* OBTENCION */
  getAllUsers(): void {
    this.users = [];
    this.userService.getUser().subscribe(
                       users => this.users = users,
                       error =>  this.errorMessage = <any>error);
  }

  getUser(id): void {
    this.userService.getUserById(id).subscribe(
                       user => this.user = user,
                       error =>  this.errorMessage = <any>error);
  }

  /* ELIMINACION */
  deleteUser(user): void {
    this.userService.deleteUser(user._id);
  }

  /* MODIFICACION */
  saveChanges(user: User): void {
    this.userService.updateUser(user).then(
                       (userRespose) => { this.user = userRespose; },
                       (error) => { this.errorMessage = <any>error; });
  }

  consultUser(user: User) {

  }


  changeActiveState(checked: boolean, user: User) {
    const accion =  checked ? 'habilitar' : 'deshabilitar';
    const data = new ConfirmDialogModel();
    data.title = 'Guardar Cambios';
    data.question = 'Quiere ' + accion + ' el usuario para hacer pedidos?';
    const dialogRef = this.dialog.open(DialogConfirmComponent, { data });
    dialogRef.afterClosed().subscribe(
      result => {
          if (result) {
            user.habilitado = checked;
            this.saveChanges(user);
            }
        }
    );
  }




}

