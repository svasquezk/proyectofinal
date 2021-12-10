import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoPagComponent } from './ingreso-pag.component';

describe('IngresoPagComponent', () => {
  let component: IngresoPagComponent;
  let fixture: ComponentFixture<IngresoPagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoPagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoPagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
