import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { cartReducer, CartState } from './cart.reducer';
import { cartFeatureKey } from './cart.selector';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature<CartState>(cartFeatureKey, cartReducer),
    EffectsModule.forFeature([]),
  ],
})
export class CartStateModule {}
