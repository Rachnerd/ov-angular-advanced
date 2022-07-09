import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CartInfo } from '../product-default/product-default.component';
import { Product } from '../product/product.component';
import { Quantity } from '../quantity-picker/quantity-picker.component';
import { QuantityValidator } from '../quantity-picker/shared/quantity.validator';

export interface ProductCart
  extends Pick<Product, 'id' | 'title' | 'image' | 'price'> {
  quantity: Quantity;
  cartInfo: CartInfo;
}

type Step = number;

@Component({
  selector: 'ov-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss'],
})
export class ProductCartComponent {
  @Input() product!: ProductCart;
  @Output() increase = new EventEmitter<Step>();
  @Output() decrease = new EventEmitter<Step>();
  @Output() remove = new EventEmitter<void>();

  decreaseAmount(): void {
    const { quantity, cartInfo } = this.product;
    this.decrease.emit(cartInfo.quantity - quantity.step);
  }

  increaseAmount(): void {
    const { quantity, cartInfo } = this.product;
    this.increase.emit(cartInfo.quantity + quantity.step);
  }
}
