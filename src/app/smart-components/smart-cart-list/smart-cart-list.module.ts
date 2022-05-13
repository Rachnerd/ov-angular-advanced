import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartCartListComponent } from './smart-cart-list.component';
import { CartListModule } from '../../ui-components/organisms/cart-list/cart-list.module';

@NgModule({
  declarations: [SmartCartListComponent],
  imports: [CommonModule, CartListModule],
  exports: [SmartCartListComponent],
})
export class SmartCartListModule {}
