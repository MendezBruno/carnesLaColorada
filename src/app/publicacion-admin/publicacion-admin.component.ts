import { Component, OnInit, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { PublicacionCrudFirebaseService } from '../servicios/publicacion-crud-firebase';
import { Publicacion } from '../modelo/publicacion';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Url } from 'url';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';


@Component({
  selector: 'app-publicacion-admin',
  templateUrl: './publicacion-admin.component.html',
  styleUrls: ['./publicacion-admin.component.css']
})
export class PublicacionAdminComponent implements OnInit {

  

  publicaciones: Publicacion[];
  currentPhoto = 0;

  constructor(private router: Router, private pcf: PublicacionCrudFirebaseService, db: AngularFireDatabase, public dialog: MatDialog) {
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

  

  openDialogEdit(dataToChange): void {
    const dialogRef = this.dialog.open(EditPublicacionComponent, {
      width: '250px',
      data: { publicacionData: dataToChange }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      dataToChange = result;
    });
  }

}



@Component({
  selector: 'app-dialog-edit-publicacion',
  templateUrl: 'edit-publicacion.component.html'
})

export class EditPublicacionComponent implements OnInit {
  constructor(public dialog: MatDialogRef<EditPublicacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() { }

}
