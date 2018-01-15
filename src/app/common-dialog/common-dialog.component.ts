import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ImagenesStorage } from '../modelo/imagenesStorages';
import { ImagesStoreService } from '../servicios/images-store.service';
import { forEach } from '@angular/router/src/utils/collection';

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
  selector: 'app-dialog-confirm-component',
  templateUrl: './dialog-templates/confirm-dialog-publicion.component.html',
})

export class DialogConfirmPublicacionComponent implements OnInit {

  constructor(public dialog: MatDialogRef<DialogConfirmPublicacionComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  

  ngOnInit() { }
}




@Component({
  selector: 'app-dialog-select-photos-component',
  templateUrl: './dialog-templates/select-photos.component.html',
  styleUrls: ['./dialog-templates/select-photos.component.css'],
  providers: [ ImagesStoreService ]
})

export class DialogSelectPhotosComponent implements OnInit {

  imagesStorages: ImagenesStorage[];
  imagesSelected: ImagenesStorage[] = [];
  dbImages: ImagesStoreService;
  files: any;
  disabled = true;

  constructor(dbImages: ImagesStoreService, public dialog: MatDialogRef <DialogSelectPhotosComponent>) {
    this.dbImages = dbImages;
  }

  ngOnInit() {
    this.chargeImages();
   }

  onNoClick(): void {
    this.dialog.close();
  }

  chargeImages(): any {
    this.dbImages.getListImageStorage().subscribe(
      (data) => {
        this.imagesStorages = data;
        console.log(this.imagesStorages);
      }
    )
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
    if(this.files && this.files.length > 0) {
      let file: any;
      for ( file of this.files) {
        this.dbImages.uploadImage(file);
      }
    }

  }

  onChange(event) {
    this.files = event.target.files;
    console.log(this.files);
    if (this.disabled) {this.disabled = false; }
   /* let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      console.log( reader.readAsDataURL(file));
      console.log(reader);
    }
    */
    
  }


}
