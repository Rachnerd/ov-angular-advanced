import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCartComponent } from './product-cart.component';
import { TitleModule } from '../../atoms/title/title.module';
import { PriceModule } from '../../atoms/price/price.module';
import { ThumbnailModule } from '../../atoms/thumbnail/thumbnail.module';
import { IconModule } from '../../atoms/icon/icon.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '../../atoms/button/button.module';

@NgModule({
  declarations: [ProductCartComponent],
  imports: [
    CommonModule,
    TitleModule,
    PriceModule,
    ThumbnailModule,
    IconModule,
    ButtonModule,
    ReactiveFormsModule,
  ],
  exports: [ProductCartComponent],
})
export class ProductCartModule {}
