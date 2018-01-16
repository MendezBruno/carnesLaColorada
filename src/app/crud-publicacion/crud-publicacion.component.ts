import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImagesStoreService } from '../servicios/images-store.service';
import { ImagenesStorage } from '../modelo/imagenesStorages';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Publicacion } from '../modelo/publicacion';
import { PublicacionCrudFirebaseService } from '../servicios/publicacion-crud-firebase';
import { DialogConfirmPublicacionComponent } from '../common-dialog/common-dialog.component';

const publicacionRoute = '/admin/publicacion';

@Component({
  selector: 'app-crud-publicacion',
  templateUrl: './crud-publicacion.component.html',
  styleUrls: ['./crud-publicacion.component.css'],
  providers: [ImagesStoreService],
})
export class CrudPublicacionComponent implements OnInit {


model: any = {};
imagesStorages: ImagenesStorage[];
imagesSelected: ImagenesStorage[] = [];
dbImages: ImagesStoreService;
publicacion: Publicacion;


  constructor(
     private router: Router,
     dbImeges: ImagesStoreService,
     public confirmDialog: MatDialog,
     public pcf: PublicacionCrudFirebaseService) {
    this.dbImages = dbImeges;

   }

  ngOnInit() {
    this.chargeImages();
  }

  onFormSubmit(model) {
  //  console.log(model);
  //  this.model = model;
  this.openDialogConfirm(model);
  }

  openDialogConfirm(model): void {
    const dialogRef = this.confirmDialog.open(DialogConfirmPublicacionComponent, {
      data: { titulo: 'Nueva Publicacion', pregunta: 'Desea Guardar La Publicacion?' }
    });
    dialogRef.afterClosed().subscribe(
      result => {
        if (result) {
        this.uploadPublicacion(model);
        this.router.navigate([publicacionRoute]);
        }
      }
    );
  }

  uploadPublicacion(model) {
    this.pcf.guardarPublicacion(
      new Publicacion(
        model.tipoCantidad,
        model.cantidad,
        model.precio,
        this.imagesSelected,
        model.descripcion,
        model.titulo));
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

}




