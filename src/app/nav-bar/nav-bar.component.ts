import { Component, OnInit} from '@angular/core';
import { AutenticacionFirebaseService } from '../servicios/autenticacionFirebase.service';




@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {

  username : string;
  userpicture : string;

  private af: AutenticacionFirebaseService;

  constructor(af: AutenticacionFirebaseService) {
    this.af = af;
  }

  ngOnInit() {
  }

  isLoggedIn() {
    if(this.af.isLoggedIn()){
      this.userpicture = this.af.getPicture();
      return true;
    }
   return false;
  }

  logout() {
    this.af.logout();
  }

  getUserName( ){
    return this.af.getName();
  }



}

