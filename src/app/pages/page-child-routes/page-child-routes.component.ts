import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getProducts } from '../../state/product/product.actions';
import { getCart } from '../../state/cart/cart.actions';

@Component({
  selector: 'ov-page-child-routes',
  templateUrl: './page-child-routes.component.html',
  styleUrls: ['./page-child-routes.component.scss'],
})
export class PageChildRoutesComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getProducts({ page: 1, size: 6 }));
    this.store.dispatch(getCart({}));
  }
}
