import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import {
  AddToCartGQL,
  CartInfoFragmentDoc,
  PaginationParams,
  ProductsListGQL,
  ProductsListPricesGQL,
  ProductsListWithoutPricesGQL,
  RemoveFromCartGQL
} from '../../../generated/graphql';
import { AddToCartEvent } from '../../ui-components/organisms/products-list/products-list.component';
import { mapToProductUnion } from './mapper/product-union.mapper';

const PAGINATATION: PaginationParams = {
  page: 1,
  size: 10,
};

@Component({
  selector: 'ov-smart-products-list',
  templateUrl: './smart-products-list.component.html',
  styleUrls: ['./smart-products-list.component.scss'],
})
export class SmartProductsListComponent implements OnInit {
  products$ = this.productsListGql
    .watch(PAGINATATION, {
      fetchPolicy: 'cache-only',
    })
    .valueChanges.pipe(
      map(({ data }) => ({
        loading: false,
        data: data ? data.products?.results.map(mapToProductUnion) : undefined,
      }))
    );

  constructor(
    private productsListGql: ProductsListGQL,
    private productsListWithoutPricesGql: ProductsListWithoutPricesGQL,
    private productsListPricesGql: ProductsListPricesGQL,
    private addToCartGQL: AddToCartGQL,
    private removeFromCartGQL: RemoveFromCartGQL
  ) {}

  ngOnInit(): void {
    this.productsListWithoutPricesGql
      .fetch(PAGINATATION)
      .subscribe(() => console.log('Products are loaded'));
    this.productsListPricesGql
      .fetch(PAGINATATION)
      .subscribe(() => console.log('Prices are loaded'));
  }

  addProductToCart({ product: { id, price }, quantity }: AddToCartEvent) {
    this.addToCartGQL
      .mutate(
        { id, quantity },
        {
          optimisticResponse: {
            __typename: 'Mutation',
            addToCart: true,
          },
          update: (proxy, _, { variables }) => {
            const { id, quantity } = variables!;
            proxy.writeFragment({
              id: `ProductInStock:${id}`,
              fragment: CartInfoFragmentDoc,
              data: {
                __typename: 'ProductInStock',
                cartInfo: {
                  id,
                  quantity,
                  total: price! * quantity,
                },
              },
            });
          },
        }
      )
      .subscribe(() => console.log('Product is added to cart'));
  }

  removeFromCart(id: string) {
    this.removeFromCartGQL
      .mutate(
        { id },
        {
          optimisticResponse: {
            __typename: 'Mutation',
            removeFromCart: true,
          },
          update: (proxy, _, { variables }) => {
            const { id } = variables!;
            proxy.writeFragment({
              id: `ProductInStock:${id}`,
              fragment: CartInfoFragmentDoc,
              data: {
                __typename: 'ProductInStock',
                cartInfo: null,
              },
            });
          },
        }
      )
      .subscribe(() => console.log('Product is removed from cart'));
  }
}
