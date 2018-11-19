import { TestBed, inject } from '@angular/core/testing';

import { AdminUserFirebaseService } from './admin-user-firebase.service';

describe('AdminUserFirebaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminUserFirebaseService]
    });
  });

  it('should be created', inject([AdminUserFirebaseService], (service: AdminUserFirebaseService) => {
    expect(service).toBeTruthy();
  }));
});
