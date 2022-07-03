import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartService } from '../../state/cart/cart.service';
import { AddToCartEvent } from '../../ui-components/organisms/products-list/products-list.component';
import {
  ProductsListState,
  selectProductsList,
} from './selectors/select-products-list.selector';

@Component({
  selector: 'ov-smart-products-list',
  templateUrl: './smart-products-list.component.html',
  styleUrls: ['./smart-products-list.component.scss'],
})
export class SmartProductsListComponent implements OnInit {
  state$!: Observable<ProductsListState>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.state$ = this.store.select(selectProductsList);
  }

  addProductToCart({ product, quantity }: AddToCartEvent) {
    // this.cartService.add(product, quantity);
  }
}
