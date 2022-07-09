import { createAction, props } from '@ngrx/store';
import { PaginatedCart } from './cart.service';

export const getCart = createAction(
  '[Cart] Get',
  props<{ pagination?: { page: number; size: number } }>()
);

export const getCartSuccess = createAction(
  '[Cart] Get Success',
  props<{ cart: PaginatedCart }>()
);

export const getCartError = createAction(
  '[Cart] Get Error',
  props<{ error: Error }>()
);

export const increaseQuantity = createAction(
  '[Cart] Increase',
  props<{ id: string; step: number }>()
);

export const decreaseQuantity = createAction(
  '[Cart] Decrease',
  props<{ id: string; step: number }>()
);

export const removeFromCart = createAction(
  '[Cart] Remove',
  props<{ id: string }>()
);
