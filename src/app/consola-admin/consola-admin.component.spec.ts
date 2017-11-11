import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolaAdminComponent } from './consola-admin.component';

describe('ConsolaAdminComponent', () => {
  let component: ConsolaAdminComponent;
  let fixture: ComponentFixture<ConsolaAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsolaAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
