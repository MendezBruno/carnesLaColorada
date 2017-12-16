import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImagesStoreService } from '../servicios/images-store.service';
import { ImagenesStorage } from '../modelo/imagenesStorages';

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


  constructor(dbImeges: ImagesStoreService) {
    this.dbImages = dbImeges;

   }

  ngOnInit() {
    this.chargeImages();
  }

  onFormSubmit(model){
    console.log(model);
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

}
