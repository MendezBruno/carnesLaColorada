import { TestBed, inject } from '@angular/core/testing';
import { UserCrudFirebaseService } from './usuario-crud-firebase.service';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';



describe('UserCrudFirebaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ ],
      providers: [UserCrudFirebaseService, AngularFireDatabase]
    });
  });

  // it('should be created', inject([UserCrudFirebaseService], (service: UserCrudFirebaseService) => {
  //   expect(service).toBeTruthy();
  // }));
});
