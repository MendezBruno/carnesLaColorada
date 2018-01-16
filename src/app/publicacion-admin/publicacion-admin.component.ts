import { Component, OnInit, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { PublicacionCrudFirebaseService } from '../servicios/publicacion-crud-firebase';
import { Publicacion } from '../modelo/publicacion';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Url } from 'url';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { EditPublicacionComponent,
   EditPrecioPublicacionComponent,
   EditCantidadPublicacionComponent,
   DialogConfirmPublicacionComponent,
   DialogSelectPhotosComponent} from '../common-dialog/common-dialog.component';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-publicacion-admin',
  templateUrl: './publicacion-admin.component.html',
  styleUrls: ['./publicacion-admin.component.css']
})
export class PublicacionAdminComponent implements OnInit {


  editStates: EditState[] = [];
  publicaciones: Publicacion[];
  currentPhoto = 0;

  constructor(private router: Router, private pcf: PublicacionCrudFirebaseService, db: AngularFireDatabase, public dialog: MatDialog) {
    this.pcf = pcf;
    this.pcf.obtenerListaDeProductos().subscribe(
      (data) => {
        this.publicaciones =  data;
        this.initilizeEdit(this.publicaciones);
        console.log(this.publicaciones);
      }
    );
    console.log('llegaron las publicaciones:');
    console.log(this.publicaciones);
   }

   initilizeEdit(publicaciones) {
     let publicacion: any;
      for ( publicacion of publicaciones) {
        if (publicacion) {
          let editState = {id: publicacion.id, state: false}
          this.editStates.push(editState);
        }
      }
      console.log('inicialice estado de publicaciones');
      console.log(this.editStates);
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

  cambiarImagen(publicacion) {
    this.currentPhoto = this.currentPhoto + 0;
   // this.imagenPath = publicacion.fotos[this.currentPhoto].url;
  }

  changeActiveState(checked: boolean, publicacion: Publicacion) {
    publicacion.activada = checked;
  }

  isEdit(publicacion): boolean {
    let editEstate: EditState;
    if (this.editStates !== undefined) { editEstate = this.editStates.find(editState => editState.id === publicacion.id); }
    return editEstate.state;
  }

  changeStateEdit(publicacion) {
   let auxEditState = this.editStates.find(editState => editState.id === publicacion.id);
   auxEditState.state = !auxEditState.state;
  }

  changeDescription(publicacion: Publicacion): void {
    const dialogRef = this.dialog.open(EditPublicacionComponent, {
      width: '250px',
      data: { publicacionData: publicacion.description }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
         publicacion.description = result;
         if (!this.isEdit(publicacion)) { this.changeStateEdit(publicacion);}
        }
    });
  }

  changePrecio(publicacion: Publicacion): void {
    const dialogRef = this.dialog.open(EditPrecioPublicacionComponent, {
      width: '250px',
      data: { publicacionData: publicacion.precio }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        publicacion.precio = result;
        if (!this.isEdit(publicacion)) { this.changeStateEdit(publicacion);}
      }
    });
  }

  changeCantidad(publicacion: Publicacion): void {
    const dialogRef = this.dialog.open(EditCantidadPublicacionComponent, {
      width: '250px',
      data: { publicacionDataCantidad: publicacion.cantidad, publicacionDataTipoCantidad: publicacion.tipoCantidad }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        if (result.publicacionDataCantidad) { publicacion.cantidad = result.publicacionDataCantidad; }
        if (result.publicacionDataTipoCantidad)  {publicacion.tipoCantidad = result.publicacionDataTipoCantidad; }
        if (!this.isEdit(publicacion)) {this.changeStateEdit(publicacion); }
      }
    });
  }

  saveChangesPublication(publicacion) {
    const dialogRef = this.dialog.open(DialogConfirmPublicacionComponent, {
      data: { titulo: 'Guardar Cambios', pregunta: 'Quiere Guardar los cambios?' }
    });
    dialogRef.afterClosed().subscribe(
      result => {
          if (result) {
            this.pcf.updatePublicacion(publicacion.id, publicacion);
            this.changeStateEdit(publicacion);
            }
        }
    );
  }

  updatePhotoPublication(publicacion: Publicacion) {
    const dialogRef = this.dialog.open(DialogSelectPhotosComponent);
    dialogRef.afterClosed().subscribe(
      result => {
        if (result) {
          if (publicacion.fotos) {publicacion.fotos = publicacion.fotos.concat(result); } else {publicacion.fotos = result; }
          if (!this.isEdit(publicacion)) {this.changeStateEdit(publicacion); }
        }
        console.log(publicacion.fotos);
      }
    );
  }

  deletePublication(publicacion) {
    const dialogRef = this.dialog.open(DialogConfirmPublicacionComponent, {
      data: { titulo: 'Borrar Publicación', pregunta: 'Está seguro que desea borrar la publicación?' }
    });
    dialogRef.afterClosed().subscribe(
      result => {
          if (result) {
            this.pcf.deletePublicacion(publicacion.id);
          }
        }
    );
  }

}


interface EditState {
  id: string;
  state: boolean; }
