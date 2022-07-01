import { createReducer, on } from '@ngrx/store';
import { addTo, emptySet, Normalized } from '../../utils/normalization.utils';
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from './cart.actions';

export interface CartProduct {
  id: string;
  quantity: number;
}

export type CartState = Normalized<CartProduct>;

const INITIAL_STATE: CartState = emptySet();

export const cartReducer = createReducer<CartState>(
  INITIAL_STATE,
  on(addToCart, (state, { quantity, id }) => addTo(state)({ quantity, id })),
  on(increaseQuantity, ({ byId, allIds }, { id, step }) => {
    const product = byId[id];
    return {
      byId: {
        ...byId,
        [id]: {
          ...product,
          quantity: product.quantity + step,
        },
      },
      allIds,
    };
  }),
  on(decreaseQuantity, ({ byId, allIds }, { id, step }) => {
    const product = byId[id];
    return {
      byId: {
        ...byId,
        [id]: {
          ...product,
          quantity: product.quantity - step,
        },
      },
      allIds,
    };
  }),
  on(removeFromCart, ({ byId, allIds }, { id }) => {
    const { [id]: removedProduct, ...updatedById } = byId;
    return {
      byId: updatedById,
      allIds: allIds.filter((id) => id !== removedProduct.id),
    };
  })
);
