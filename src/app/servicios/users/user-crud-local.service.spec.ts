import { TestBed, inject } from '@angular/core/testing';

import { UserCrudLocalService } from './user-crud-local.service';

describe('UserCrudLocalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserCrudLocalService]
    });
  });

  it('should be created', inject([UserCrudLocalService], (service: UserCrudLocalService) => {
    expect(service).toBeTruthy();
  }));
});
