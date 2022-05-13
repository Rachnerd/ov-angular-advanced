import { createAction, props } from '@ngrx/store';

export const addToCart = createAction(
  '[Cart] Add',
  props<{ id: string; quantity: number }>()
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
