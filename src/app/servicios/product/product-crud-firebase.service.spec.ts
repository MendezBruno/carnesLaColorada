import { TestBed, inject } from '@angular/core/testing';
import { ProductCrudFirebaseService } from './product-crud-firebase.service';


describe('ProductCrudFirebaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductCrudFirebaseService]
    });
  });

  it('should be created', inject([ProductCrudFirebaseService], (service: ProductCrudFirebaseService) => {
    expect(service).toBeTruthy();
  }));
});
