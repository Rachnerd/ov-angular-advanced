import { createSelector } from '@ngrx/store';
import { selectCartState } from '../../../state/cart/cart.selector';
import { selectProductState } from '../../../state/product/product.selector';
import { ApiProduct } from '../../../state/product/product.service';
import { Product } from '../../../ui-components/molecules/product/product.component';
import { ProductUnion } from '../../../ui-components/organisms/products-list/products-list.component';
import { AsyncState } from '../../../utils/async-state.utils';
import { toArray } from '../../../utils/normalization.utils';

/**
 * Type that represents the needs of the UI component ProductsList.
 */
export type ProductsListState = AsyncState<ProductUnion[]>;

/**
 * Selector that converts store state to fit-for-purpose UI state.
 * @param state State coming from the store.
 * @returns AsyncState with parsed UI ProductUnions instead of raw ApiProducts.
 */
export const selectProductsList = createSelector(
  selectProductState,
  selectCartState,
  (productState, cartState) => ({
    ...productState,
    data:
      !productState.loading && productState.data
        ? toArray(productState.data)
            /**
             * Map api product to client product
             */
            .map(apiProductToProduct)
            /**
             * Merge cart info if applicable
             */
            .map((product) => {
              if (
                product.type === 'product-replaced' ||
                product.type === 'product-out-of-stock' ||
                cartState.data === undefined
              ) {
                return product;
              }
              const { byId } = cartState.data.productsNormalized;
              return {
                ...product,
                cartInfo: byId[product.id],
              };
            })
        : [],
  })
);
/**
 * Mapper function that acts as the integration between App and UI state.
 * @param param0 Product coming directly from an API.
 * @returns Product fit-for-purpose for the ProductsListComponent.
 */
const apiProductToProduct = ({
  category,
  ...apiProduct
}: ApiProduct): ProductUnion => {
  const product: Product = {
    ...apiProduct,
    /**
     * Remap a key to fit the data shape of the UI.
     */
    subtitle: category,
  };
  if (apiProduct.quantity) {
    return {
      ...product,
      type: 'product',
      /**
       * Compute values immediately so they are not recalculated during render cycles.
       */
      isLimited: apiProduct.quantity.max / apiProduct.quantity.step < 6,
      quantity: apiProduct.quantity,
    };
  } else {
    return apiProduct.replacement
      ? {
          ...product,
          type: 'product-replaced',
          replacement: apiProduct.replacement,
        }
      : {
          ...product,
          type: 'product-out-of-stock',
        };
  }
};
