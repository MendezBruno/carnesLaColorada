import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImagesStoreService } from '../../../servicios/images-store.service';
import { ImagenesStorage } from '../../../modelo/imagenesStorages';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DialogConfirmPublicacionComponent } from '../../../components/common-dialog/common-dialog.component';
import { PublicacionCrudFirebaseService } from '../../../servicios/publicaciones/publicacion-crud-firebase';
import { Product } from '../../../modelo/producto';
import { ProductCrudFirebaseService } from '../../../servicios/product/product-crud-firebase.service';

const publicacionRoute = '/admin/publicacion';

@Component({
  selector: 'app-crud-product',
  templateUrl: './crud-product.component.html',
  styleUrls: ['./crud-product.component.css'],
  providers: [ImagesStoreService],
})
export class CrudProductComponent implements OnInit {


model: any = {};
imagesStorages: ImagenesStorage[][];
imagesSelected: ImagenesStorage[] = [];
dbImages: ImagesStoreService;
product: Product;


  constructor(
     private router: Router,
     dbImeges: ImagesStoreService,
     public confirmDialog: MatDialog,
     public productService: ProductCrudFirebaseService) {
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
    this.productService.addPublicacion(
      new Product(
        model.code,
        model.name,
        model.tipoProducto,
        model.stock,
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

}




