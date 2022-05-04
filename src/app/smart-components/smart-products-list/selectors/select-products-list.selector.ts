import { createSelector } from '@ngrx/store';
import { selectProductsState } from '../../../state/product/product.selector';
import { ApiProduct } from '../../../state/product/product.service';
import { ProductDefault } from '../../../ui-components/molecules/product-default/product-default.component';
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
  selectProductsState,
  (state) => ({
    ...state,
    data:
      !state.loading && state.data
        ? toArray(state.data).map(apiProductToProduct)
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
}: ApiProduct): ProductDefault => ({
  ...apiProduct,
  type: 'product',
  /**
   * Remap a key to fit the data shape of the UI.
   */
  subtitle: category,
  /**
   * Compute values immediately so they are not recalculated during render cycles.
   */
  isLimited: apiProduct.quantity.max / apiProduct.quantity.step < 6,
});