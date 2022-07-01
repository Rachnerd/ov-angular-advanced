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
  (productState, cartState): ProductsListState => ({
    ...productState,
    data:
      !productState.loading && productState.data
        ? toArray(productState.data)
            .map(apiProductToProduct)
            .map((product) => {
              const cartInfo = cartState.byId[product.id];
              return {
                ...product,
                cartInfo: cartInfo
                  ? {
                      ...cartInfo,
                      total: cartInfo.quantity * product.price,
                    }
                  : undefined,
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
          replacement: {
            ...apiProduct.replacement,
            subtitle: apiProduct.replacement.category,
          },
        }
      : {
          ...product,
          type: 'product-out-of-stock',
        };
  }
};
