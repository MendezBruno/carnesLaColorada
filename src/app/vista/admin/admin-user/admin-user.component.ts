import { Component, OnInit } from '@angular/core';
import { User } from '../../../modelo/usuario';
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
  roles = ['Administrador', 'otro'];
  user = new User();
  submitted: boolean;
  active = true;
  selectedUser: User;
  users: User[];
  errorMessage: string;
  isCreation: boolean;
  modal: MatDialogRef<UserModalComponent>;
  querySearch: String;


  constructor(private userService: UserCrudFirebaseService, public dialog: MatDialog) {

   console.log('estoy para pedir usuarios');
   this.getAllUsers();

  }

  ngOnInit() {
  }

  handleQueryStringUpdate(queryString): void {
    this.querySearch = queryString;
  }

  newUser() {
    this.user = new User();
    this.active = false;
    this.isCreation = false;
    setTimeout(() => this.active = true, 0);
  }

  /* METODOS DEL MODAL */
  saveUser() {
    if (this.isCreation) {
      this.addUser();
    } else {
      this.saveChanges(this.user);
    }
  }

  // Abre el modal para el login
  openDialog(user): void {
    this.user = user;

    this.modal = this.dialog.open(UserModalComponent);

    this.modal.componentInstance.model = this;

    this.modal.afterClosed().subscribe(result => {
      this.resetDialogValues();
    });
  }

  // Resetea los valores de los campos
  resetDialogValues(): void {
    this.user = new User();
    this.errorMessage = '';
  }

  /* CREACION */
  addUser(): void {
    this.userService.addUser(this.user).then(
                    error => this.errorMessage = <any>error);

    this.users.push(this.user);
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
                       user => this.selectedUser = user,
                       error =>  this.errorMessage = <any>error);
  }

  /* ELIMINACION */
  deleteUser(user): void {
    this.userService.deleteUser(user._id);
  }

  /* MODIFICACION */
  saveChanges(user: User): void {
    this.userService.updateUser(user).then(
                       (userRespose) => { this.selectedUser = userRespose; },
                       (error) => { this.errorMessage = <any>error; });
  }

  // Comienza a crear un usuario
  createNewUser(): void {
    this.isCreation = true;
    this.openDialog(new User());
  }

  // Comienza la edicion de usuario
  editUser(user): void {
      this.isCreation = false;
      user.password = '';
      this.openDialog(user);
  }

  identify(index, user) {
      return index;
  }

  /* CONFIRMATION */
  confirmDelete(user): void {
    let confirmationDialog: MatDialogRef<DialogConfirmComponent>;
    const data = new ConfirmDialogModel();
    data.title = 'Borrar usuario';
    data.question = 'Seguro que quiere borrar el usuario de ' + user.name;
    confirmationDialog = this.dialog.open(DialogConfirmComponent, { data ,
      disableClose: false
    });

    confirmationDialog.afterClosed().subscribe(result => {

      if (result) { this.deleteUser(user); }

      confirmationDialog = null;
    });
  }

  getUserColor(user): String {
    if (user.role === 'Administrador') {
      return 'primary';
    } else {
      return 'warn';
    }
  }


}

