import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import {
  ProductUnionFragment,
  ProductsListGQL,
} from '../../../generated/graphql';
import {
  AddToCartEvent,
  ProductUnion,
} from '../../ui-components/organisms/products-list/products-list.component';

@Component({
  selector: 'ov-smart-products-list',
  templateUrl: './smart-products-list.component.html',
  styleUrls: ['./smart-products-list.component.scss'],
})
export class SmartProductsListComponent implements OnInit {
  products$ = this.productsListGql
    .fetch({
      page: 1,
      size: 10,
    })
    .pipe(
      map(({ loading, data }) => ({
        loading,
        data: data ? data.products.results.map(mapToProductUnion) : undefined,
      }))
    );

  constructor(private productsListGql: ProductsListGQL) {}

  ngOnInit(): void {}

  addProductToCart({ product, quantity }: AddToCartEvent) {
    console.log(`Add  ${quantity}x ${product.id} to cart`);
  }
}

const mapToProductUnion = (product: ProductUnionFragment): ProductUnion => {
  if (product.__typename === 'ProductInStock') {
    return {
      type: 'product',
      ...product,
      subtitle: product.category,
      isLimited: product.limited,
      cartInfo: product.cartInfo ?? undefined,
    };
  } else if (product.__typename === 'ProductOutOfStock') {
    return {
      type: 'product-out-of-stock',
      ...product,
      subtitle: product.category,
    };
  } else {
    return {
      type: 'product-replaced',
      subtitle: product.category,
      ...product,
    };
  }
};
