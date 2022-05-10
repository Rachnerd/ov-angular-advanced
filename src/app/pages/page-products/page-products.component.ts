import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { getProducts } from '../../state/product/product.actions';
@Component({
  selector: 'ov-page-products',
  templateUrl: './page-products.component.html',
  styleUrls: ['./page-products.component.scss'],
})
export class PageProductsComponent implements OnInit {
  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const { products } = this.route.snapshot.data;
    if (!products) {
      this.store.dispatch(getProducts({ limit: 6 }));
    }
  }
}
