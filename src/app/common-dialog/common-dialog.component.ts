import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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


