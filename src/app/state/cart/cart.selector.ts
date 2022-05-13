import { createFeatureSelector } from '@ngrx/store';
import { CartState } from './cart.reducer';

export const cartFeatureKey = 'cart';

export const selectCartState = createFeatureSelector<CartState>(cartFeatureKey);
