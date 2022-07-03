import { createAction, props } from '@ngrx/store';
import { PaginatedCart } from './cart.service';

export const FULL_CART_SIZE = 10000;

export const getFullCart = createAction('[Cart] Get full');

export const getCart = createAction(
  '[Cart] Get',
  props<{ page: number; size: number }>()
);

export const getCartSuccess = createAction(
  '[Cart] Get Success',
  props<{ cart: PaginatedCart }>()
);

export const getCartError = createAction(
  '[Cart] Get Error',
  props<{ error: Error }>()
);
