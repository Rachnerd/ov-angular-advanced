import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCartComponent } from './product-cart.component';
import { ProductCartModule } from './product-cart.module';

describe('ProductCartComponent', () => {
  let component: ProductCartComponent;
  let fixture: ComponentFixture<ProductCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductCartComponent],
      imports: [ProductCartModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCartComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
