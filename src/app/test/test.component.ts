import { Component, OnInit } from '@angular/core';
import { UserCrudFirebaseService } from '../servicios/users/usuario-crud-firebase.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private service: UserCrudFirebaseService) { }

  ngOnInit() {
  }


  pruebame() {
    this.service.getUserById('ldjgnerpon').subscribe( (res) => {
        console.log(res);
    });
  }
}
