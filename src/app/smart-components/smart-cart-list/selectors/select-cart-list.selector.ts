import { createSelector } from '@ngrx/store';
import { selectCartState } from '../../../state/cart/cart.selector';
import { CartProduct } from '../../../state/cart/cart.service';
import { selectProductState } from '../../../state/product/product.selector';
import { ProductCart } from '../../../ui-components/molecules/product-cart/product-cart.component';
import { toArray } from '../../../utils/normalization.utils';

/**
 * Type that represents the needs of the UI component ProductsList.
 */
export interface CartListState {
  products: ProductCart[];
  totalPrice: number;
}

/**
 * Selector that converts store state to fit-for-purpose UI state.
 * @param state State coming from the store.
 * @returns AsyncState with parsed UI ProductUnions instead of raw ApiProducts.
 */
export const selectCartList = createSelector(
  selectProductState,
  selectCartState,
  (productState, cartState): CartListState => {
    if (!cartState.data) {
      return {
        products: [],
        totalPrice: 0,
      };
    }
    const products = toArray<CartProduct>(
      cartState.data.productsNormalized
    ).map((cartProduct) => {
      const product = productState.data?.byId[cartProduct.id]!;
      return {
        ...product,
        quantity: product.quantity!,
        cartInfo: cartProduct,
      };
    });
    return {
      products,
      totalPrice: cartState.data.total,
    };
  }
);
