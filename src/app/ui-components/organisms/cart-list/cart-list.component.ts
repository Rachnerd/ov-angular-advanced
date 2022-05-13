import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductCart } from '../../molecules/product-cart/product-cart.component';

export interface QuantityEvent {
  step: number;
  id: string;
}

@Component({
  selector: 'ov-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  @Input() products!: ProductCart[];
  @Input() totalPrice!: number;

  @Output() increaseProduct = new EventEmitter<QuantityEvent>();
  @Output() decreaseProduct = new EventEmitter<QuantityEvent>();
  @Output() removeProduct = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  increase(id: string, step: number) {
    this.increaseProduct.emit({
      step,
      id,
    });
  }

  decrease(id: string, step: number) {
    this.decreaseProduct.emit({
      step,
      id,
    });
  }

  remove(id: string) {
    this.removeProduct.emit(id);
  }

  trackById(_index: number, { id }: ProductCart) {
    return id;
  }
}
