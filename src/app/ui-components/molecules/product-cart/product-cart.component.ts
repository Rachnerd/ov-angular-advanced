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
export class ProductCartComponent implements OnInit, OnChanges {
  @Input() product!: ProductCart;
  @Output() increase = new EventEmitter<Step>();
  @Output() decrease = new EventEmitter<Step>();
  @Output() remove = new EventEmitter<void>();

  quantityFormControl!: FormControl;

  constructor() {}

  ngOnChanges({ product }: SimpleChanges): void {
    if (product && !product.firstChange) {
      this.quantityFormControl.setValue(product.currentValue.cartInfo.quantity);
    }
  }

  ngOnInit(): void {
    this.quantityFormControl = new FormControl(this.product.cartInfo.quantity, [
      Validators.required,
      /**
       * Custom validator to check if the quantity meets the step requirement.
       */
      QuantityValidator(this.product.quantity.step),
    ]);
  }

  decreaseAmount(): void {
    this.decrease.emit(this.product.quantity.step);
  }

  increaseAmount(): void {
    this.increase.emit(this.product.quantity.step);
  }
}
