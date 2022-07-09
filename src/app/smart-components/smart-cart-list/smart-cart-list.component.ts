import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { deleteFromCart, updateQuantity } from '../../state/cart/cart.actions';
import { QuantityEvent } from '../../ui-components/organisms/cart-list/cart-list.component';
import {
  CartListState,
  selectCartList,
} from './selectors/select-cart-list.selector';

@Component({
  selector: 'ov-smart-cart-list',
  templateUrl: './smart-cart-list.component.html',
  styleUrls: ['./smart-cart-list.component.scss'],
})
export class SmartCartListComponent implements OnInit {
  state$!: Observable<CartListState>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.state$ = this.store.select(selectCartList);
  }

  increaseProduct(event: QuantityEvent) {
    this.store.dispatch(updateQuantity(event));
  }

  decreaseProduct(event: QuantityEvent) {
    this.store.dispatch(updateQuantity(event));
  }

  removeProduct(id: string) {
    this.store.dispatch(deleteFromCart({ id }));
  }
}
