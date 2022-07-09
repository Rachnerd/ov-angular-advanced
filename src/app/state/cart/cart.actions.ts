import { createAction, props } from '@ngrx/store';
import { CartProduct, PaginatedCart } from './cart.service';

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

export const addToCart = createAction(
  '[Cart] Add to cart',
  props<{ product: Pick<CartProduct, 'id' | 'quantity'> }>()
);

export const addToCartSuccess = createAction(
  '[Cart] Add to cart Success',
  props<{ product: Pick<CartProduct, 'id' | 'quantity'> }>()
);

export const addToCartError = createAction(
  '[Cart] Add to cart Error',
  props<{ error: Error }>()
);

export const updateQuantity = createAction(
  '[Cart] Update quantity',
  props<{ id: string; quantity: number }>()
);

export const updateQuantitySuccess = createAction(
  '[Cart] Update quantity success',
  props<{ id: string; quantity: number }>()
);

export const updateQuantityError = createAction(
  '[Cart] Update quantity error',
  props<{ error: Error }>()
);

export const deleteFromCart = createAction(
  '[Cart] Delete from cart',
  props<{ id: string }>()
);

export const deleteFromCartSuccess = createAction(
  '[Cart] Delete from cart success',
  props<{ id: string }>()
);

export const deleteFromCartError = createAction(
  '[Cart] Delete from cart error',
  props<{ error: Error }>()
);
