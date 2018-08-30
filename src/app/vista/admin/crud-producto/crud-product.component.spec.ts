import { async, ComponentFixture, TestBed } from '@angular/core/testing';


describe('CrudProductComponent', () => {
  let component: CrudProductComponent;
  let fixture: ComponentFixture<CrudProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
