import { createReducer, on } from '@ngrx/store';
import { AsyncState } from '../../utils/async-state.utils';
import {
  emptySet,
  mergeSets,
  normalize,
  Normalized,
} from '../../utils/normalization.utils';
import { Pagination } from '../../utils/pagination.utils';
import * as CartActions from './cart.actions';
import { CartProduct } from './cart.service';

interface NormalizedPaginatedCart {
  productsNormalized: Normalized<CartProduct>;
  productsPaginated?: Pagination<string>;
  total: number;
}

export type CartState = AsyncState<NormalizedPaginatedCart>;

const INITIAL_STATE: CartState = {
  loading: false,
};

export const cartReducer = createReducer<CartState>(
  INITIAL_STATE,
  on(CartActions.getCartSuccess, (state, { cart }) => ({
    loading: false,
    data: {
      productsNormalized: mergeSets(
        state.data?.productsNormalized ?? emptySet(),
        normalize(cart.products.results)
      ),
      productsPaginated: {
        ...cart.products,
        results: cart.products.results.map(({ id }) => id),
      },
      total: cart.total,
    },
  })),
  on(CartActions.getCartError, (_, { error }) => ({
    loading: false,
    error,
  }))
);
