import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list.component';
import { ProductCartModule } from '../../molecules/product-cart/product-cart.module';
import { PriceModule } from '../../atoms/price/price.module';

@NgModule({
  declarations: [CartListComponent],
  imports: [CommonModule, ProductCartModule, PriceModule],
  exports: [CartListComponent],
})
export class CartListModule {}
