import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ImagenesStorage } from '../../modelo/imagenesStorages';
import { ImagesStoreService } from '../../servicios/images-store.service';
import { forEach } from '@angular/router/src/utils/collection';
import { AdminUserComponent } from '../../vista/admin/admin-user/admin-user.component';
import { ConfirmDialogModel } from './models-data/confirmDialogModel';

@Component({
  selector: 'app-common-dialog',
  templateUrl: './common-dialog.component.html',
  styleUrls: ['./common-dialog.component.css']
})
export class CommonDialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


@Component({
  selector: 'app-dialog-edit-publicacion',
  templateUrl: './dialog-templates/edit-publicacion.component.html'
})

export class EditPublicacionComponent implements OnInit {
  constructor(public dialog: MatDialogRef<EditPublicacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() { }

  onNoClick(): void {
    this.dialog.close();
  }

}



@Component({
  selector: 'app-dialog-edit-precio-publicacion',
  templateUrl: './dialog-templates/edit-precio-publicacion.component.html'
})

export class EditPrecioPublicacionComponent implements OnInit {
  constructor(public dialog: MatDialogRef<EditPrecioPublicacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() { }

  onNoClick(): void {
    this.dialog.close();
  }
}



@Component({
  selector: 'app-dialog-edit-cantidad-publicacion',
  templateUrl: './dialog-templates/edit-cantidad-publicacion.component.html'
})

export class EditCantidadPublicacionComponent implements OnInit {
  constructor(public dialog: MatDialogRef<EditCantidadPublicacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() { }

  onNoClick(): void {
    this.dialog.close();
  }
}

@Component({
  selector: 'app-dialog-edit-stock-publicacion',
  templateUrl: './dialog-templates/edit-stock-publicacion.component.html'
})

export class EditStockPublicacionComponent implements OnInit {
  constructor(public dialog: MatDialogRef<EditStockPublicacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() { }

  onNoClick(): void {
    this.dialog.close();
  }
}

@Component({
  selector: 'app-confirm-dialog-component',
  templateUrl: './dialog-templates/confirm-dialog-publicion.component.html',
})

export class DialogConfirmComponent implements OnInit {

  constructor(public dialog: MatDialogRef<DialogConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel) { }


  ngOnInit() { }
}




@Component({
  selector: 'app-dialog-select-photos-component',
  templateUrl: './dialog-templates/select-photos.component.html',
  styleUrls: ['./dialog-templates/select-photos.component.css'],
  providers: [ ImagesStoreService ]
})

export class DialogSelectPhotosComponent implements OnInit {

  imagesStorages: ImagenesStorage[][];
  imagesSelected: ImagenesStorage[] = [];
  dbImages: ImagesStoreService;
  files: any;

  constructor(dbImages: ImagesStoreService, public dialog: MatDialogRef <DialogSelectPhotosComponent>) {
    this.dbImages = dbImages;
  }

  ngOnInit() {
    this.chargeImages();
   }

  onNoClick(): void {
    this.dialog.close();
  }

  haventFiles(): boolean {
    return this.files ? this.files.length < 1 : true;
  }

  haventNewPhotos(): boolean {
    return this.imagesSelected.length < 1;
  }

  chargeImages(): any {
    this.dbImages.getListImageStorage().subscribe(
      (data) => {
        this.imagesStorages = data;
        console.log(this.imagesStorages);
      }
    );
  }

  onClick(image) {
   this.addImagenToPublicacion(image);
  }


  addImagenToPublicacion(imagen: any) {
    this.imagesSelected.push(imagen);
  }

  removeImage(image) {
    console.log(image);
    this.imagesSelected.splice(this.imagesSelected.indexOf(image), 1);
  }

  upload() {
    if (this.files && this.files.length > 0) {
      let file: any;
      for ( file of this.files) {
        this.dbImages.uploadImage(file);
      }
    }

  }

  onChange(event) {
    this.files = event.target.files;
    console.log(this.files);
  }


}



@Component({
  selector: 'app-user-modal',
  templateUrl: './userModal/userModal.component.html',
  styleUrls: ['./userModal/userModal.component.css'],
  })
  export class UserModalComponent {
    model: AdminUserComponent;

    constructor(public dialogRef: MatDialogRef<UserModalComponent>) {}

    // Detecta el enter para el login
    keyDownFunction(event) {
      if (event.keyCode === 13) {
        console.log('Presiona Enter');
      }
    }
  }
