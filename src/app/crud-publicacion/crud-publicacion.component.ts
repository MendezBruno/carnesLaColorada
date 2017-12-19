import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImagesStoreService } from '../servicios/images-store.service';
import { ImagenesStorage } from '../modelo/imagenesStorages';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-crud-publicacion',
  templateUrl: './crud-publicacion.component.html',
  styleUrls: ['./crud-publicacion.component.css'],
  providers:[ImagesStoreService],
})
export class CrudPublicacionComponent implements OnInit {
  
  

model: any = {};
imagesStorages: ImagenesStorage[];
imagesSelected: ImagenesStorage[] = [];
dbImages: ImagesStoreService;


  constructor(dbImeges: ImagesStoreService, public confirmDialog: MatDialog) {
    this.dbImages = dbImeges;

   }

  ngOnInit() {
    this.chargeImages();
  }

  onFormSubmit(model){
  //  console.log(model);
  //  this.model = model;
  this.openDialogConfirm(model);
  }

  openDialogConfirm(model): void{
    const dialogRef = this.confirmDialog.open(DialogConfirmPublicacionComponent);
    dialogRef.afterClosed().subscribe(
      result => { console.log(result); console.log(this.model); }
    );
  }

  keyDownFunction(event){
    console.log(event);
  }

  chargeImages(): any {
    this.dbImages.getListImageStorage().subscribe( 
      (data) => {
        this.imagesStorages = data
        console.log(this.imagesStorages)
      }
    )
  }

  onClick(image){
   this.addImagenToPublicacion(image)
  }
  

  addImagenToPublicacion(imagen: any){
    this.imagesSelected.push(imagen)
  }

  removeImage(image){
    console.log(image);
    this.imagesSelected.splice(this.imagesSelected.indexOf(image),1);
  }

}



@Component({
  selector: 'app-dialog-confirm-component',
  templateUrl: './confirm-dialog-publicion.component.html',
})

export class DialogConfirmPublicacionComponent implements OnInit {
  constructor(public dialog: MatDialogRef<DialogConfirmPublicacionComponent>) { }

  ngOnInit() { }
}

