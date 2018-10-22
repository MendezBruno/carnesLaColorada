import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionAdminComponent } from './publicacion-admin.component';

describe('PublicacionAdminComponent', () => {
  let component: PublicacionAdminComponent;
  let fixture: ComponentFixture<PublicacionAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicacionAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
