import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoPagComponent } from './producto-pag.component';

describe('ProductoPagComponent', () => {
  let component: ProductoPagComponent;
  let fixture: ComponentFixture<ProductoPagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoPagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoPagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
