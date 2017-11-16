import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPublicacionComponent } from './crud-publicacion.component';

describe('CrudPublicacionComponent', () => {
  let component: CrudPublicacionComponent;
  let fixture: ComponentFixture<CrudPublicacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudPublicacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudPublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
