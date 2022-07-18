import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PriceModule } from '../../atoms/price/price.module';
import { RatingModule } from '../../atoms/rating/rating.module';
import { SpinnerModule } from '../../atoms/spinner/spinner.module';
import { SubTitleModule } from '../../atoms/sub-title/sub-title.module';
import { ThumbnailModule } from '../../atoms/thumbnail/thumbnail.module';
import { TitleModule } from '../../atoms/title/title.module';
import { ProductComponent } from './product.component';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ThumbnailModule,
    TitleModule,
    PriceModule,
    SubTitleModule,
    RatingModule,
    SpinnerModule,
  ],
  exports: [ProductComponent],
})
export class ProductModule {}
