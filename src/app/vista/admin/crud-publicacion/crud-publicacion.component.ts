import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImagesStoreService } from '../../../servicios/images-store.service';
import { ImagenesStorage } from '../../../modelo/imagenesStorages';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Publicacion } from '../../../modelo/publicacion';
import { DialogConfirmComponent } from '../../../components/common-dialog/common-dialog.component';
import { PublicacionCrudFirebaseService } from '../../../servicios/publicaciones/publicacion-crud-firebase';
import { ConfirmDialogModel } from '../../../components/common-dialog/models-data/confirmDialogModel';
import { Observable } from 'rxjs/Observable';

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
imagesStorages$: Observable<ImagenesStorage[]>;


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
    const data = new ConfirmDialogModel();
    data.question = 'Desea Guardar La Publicacion?';
    data.title = 'Nueva Publicacion';
    const dialogRef = this.confirmDialog.open(DialogConfirmComponent, {data});
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
    this.pcf.addPublicacion(
      new Publicacion(
        model.tipoCantidad,
        model.cantidad,
        model.precio,
        model.stock,
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
    );
   // this.imagesStorages$ = this.dbImages.getListImageStorage();
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




