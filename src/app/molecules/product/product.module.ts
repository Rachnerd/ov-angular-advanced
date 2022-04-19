import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ThumbnailModule } from 'src/app/atoms/thumbnail/thumbnail.module';
import { TitleModule } from 'src/app/atoms/title/title.module';
import { PriceModule } from 'src/app/atoms/price/price.module';
import { SubTitleModule } from 'src/app/atoms/sub-title/sub-title.module';
import { RatingModule } from 'src/app/atoms/rating/rating.module';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ThumbnailModule,
    TitleModule,
    PriceModule,
    SubTitleModule,
    RatingModule,
  ],
  exports: [ProductComponent],
})
export class ProductModule {}
