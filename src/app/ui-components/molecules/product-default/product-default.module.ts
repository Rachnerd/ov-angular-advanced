import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDefaultComponent } from './product-default.component';
import { ProductModule } from '../product/product.module';
import { MessageModule } from '../../atoms/message/message.module';
import { IconModule } from '../../atoms/icon/icon.module';
import { ButtonModule } from '../../atoms/button/button.module';
import { QuantityPickerModule } from '../quantity-picker/quantity-picker.module';
import { ResizeObserverModule } from '../../utils/directives/resize-observer/resize-observer.module';

@NgModule({
  declarations: [ProductDefaultComponent],
  imports: [
    CommonModule,
    ProductModule,
    MessageModule,
    IconModule,
    ButtonModule,
    QuantityPickerModule,
    ResizeObserverModule,
  ],
  exports: [ProductDefaultComponent],
})
export class ProductDefaultModule {}
