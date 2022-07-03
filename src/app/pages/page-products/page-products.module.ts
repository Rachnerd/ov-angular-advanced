import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductResolver } from '../../resolvers/product.resolver';
import { SmartProductsListModule } from '../../smart-components/smart-products-list/smart-products-list.module';
import { CartStateModule } from '../../state/cart/cart.state.module';
import { ProductStateModule } from '../../state/product/product.module';
import { TemplateDefaultModule } from '../../ui-components/templates/template-default/template-default.module';
import { PageProductsComponent } from './page-products.component';

@NgModule({
  declarations: [PageProductsComponent],
  imports: [
    CommonModule,
    TemplateDefaultModule,
    SmartProductsListModule,
    ProductStateModule,
    CartStateModule,
    RouterModule.forChild([
      {
        path: '',
        component: PageProductsComponent,
      },
      {
        path: 'resolved',
        component: PageProductsComponent,
        resolve: {
          products: ProductResolver,
        },
      },
    ]),
  ],
  exports: [PageProductsComponent],
})
export class PageProductsModule {}
