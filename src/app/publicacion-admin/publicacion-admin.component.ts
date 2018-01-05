import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PublicacionCrudFirebaseService } from '../servicios/publicacion-crud-firebase';
import { Publicacion } from '../modelo/publicacion';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Url } from 'url';


@Component({
  selector: 'app-publicacion-admin',
  templateUrl: './publicacion-admin.component.html',
  styleUrls: ['./publicacion-admin.component.css']
})
export class PublicacionAdminComponent implements OnInit {

  

  publicaciones: Publicacion[];
  //imagenPath: any;
  currentPhoto = 0;

  constructor(private router: Router, private pcf: PublicacionCrudFirebaseService, db: AngularFireDatabase) {
    this.pcf = pcf;
    this.pcf.obtenerListaDeProductos().subscribe(
      (data) => {
        this.publicaciones =  data;
        console.log(this.publicaciones);
      }
    );
    
    console.log(this.publicaciones);
   }

  ngOnInit() {
  }

  publicacionTieneFotos(publicacion: Publicacion ): boolean {
    return  !(publicacion.fotos === undefined) ;
  }

  agregarPublicacion() {
    this.goTo('/admin/nuevaPublicacion');
  }

  goTo(path: string) {
    this.router.navigate([path]);
    }

  getPhoto(publicacion: Publicacion):Url{
   return publicacion.fotos[0].url;
  }  

  cambiarImagen(publicacion) {
    this.currentPhoto = this.currentPhoto + 0;
   // this.imagenPath = publicacion.fotos[this.currentPhoto].url;
  }

  changeActiveState(checked: boolean, publicacion: Publicacion) {
    publicacion.activada = checked;
  }
}
