import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publicacion-admin',
  templateUrl: './publicacion-admin.component.html',
  styleUrls: ['./publicacion-admin.component.css']
})
export class PublicacionAdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  agregarPublicacion(){
    this.goTo('/admin/nuevaPublicacion');
  }

  goTo(path: string){
    this.router.navigate([path]);
    }
}
