import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartProductsListComponent } from './smart-products-list.component';
import { ProductsListModule } from '../../ui-components/organisms/products-list/products-list.module';
import { SpinnerModule } from '../../ui-components/atoms/spinner/spinner.module';

@NgModule({
  declarations: [SmartProductsListComponent],
  imports: [CommonModule, ProductsListModule, SpinnerModule],
  exports: [SmartProductsListComponent],
})
export class SmartProductsListModule {}
