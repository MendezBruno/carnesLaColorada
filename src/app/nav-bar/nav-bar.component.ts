import { Component, OnInit} from '@angular/core';
import { AutenticacionFirebaseService } from '../servicios/autenticacionFirebase.service';




@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {


  private af: AutenticacionFirebaseService;

  constructor(af: AutenticacionFirebaseService) {
    this.af = af;
  }

  ngOnInit() {
  }

  isLoggedIn() {
   return this.af.isLoggedIn();
  }

  logout() {
    this.af.logout();
  }

}

