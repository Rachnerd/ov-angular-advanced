import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Product } from '../product/product.component';
import { Quantity } from '../quantity-picker/quantity-picker.component';

type ProductBreakpoint = 'small' | 'large';

type ProductBreakpointConfig = Record<ProductBreakpoint, number>;

export interface ProductDefault extends Product {
  type: 'product';
  quantity: Quantity;
  isLimited: boolean;
  cartInfo?: CartInfo;
}

export interface CartInfo {
  quantity: number;
  total: number;
}

@Component({
  selector: 'ov-product-default',
  templateUrl: './product-default.component.html',
  styleUrls: ['./product-default.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDefaultComponent implements OnInit {
  @Input() product!: ProductDefault;

  @Output() addToCart = new EventEmitter<number>();

  breakpointConfig: ProductBreakpointConfig = {
    small: 0,
    large: 475,
  };

  isLarge = false;

  ngOnInit(): void {}

  selectQuantity(quantity: number) {
    this.addToCart.emit(quantity);
  }

  onResize(breakpoint: ProductBreakpoint | string) {
    this.isLarge = breakpoint === 'large';
  }
}
