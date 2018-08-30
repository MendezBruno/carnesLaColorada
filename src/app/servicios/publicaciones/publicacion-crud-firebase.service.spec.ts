import { TestBed, inject } from '@angular/core/testing';
import { PublicacionCrudFirebaseService } from './publicacion-crud-firebase';


describe('ProductCrudFirebaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublicacionCrudFirebaseService]
    });
  });

  it('should be created', inject([PublicacionCrudFirebaseService], (service: PublicacionCrudFirebaseService) => {
    expect(service).toBeTruthy();
  }));
});
