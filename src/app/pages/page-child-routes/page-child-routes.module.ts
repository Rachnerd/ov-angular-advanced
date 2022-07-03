import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SmartProductsListComponent } from '../../smart-components/smart-products-list/smart-products-list.component';
import { SmartProductsListModule } from '../../smart-components/smart-products-list/smart-products-list.module';
import { CartStateModule } from '../../state/cart/cart.state.module';
import { ProductStateModule } from '../../state/product/product.module';
import { TemplateDefaultModule } from '../../ui-components/templates/template-default/template-default.module';
import { PageChildRoutesComponent } from './page-child-routes.component';
import { SideComponent } from './side/side.component';

@NgModule({
  declarations: [PageChildRoutesComponent, SideComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'child-routes',
        component: PageChildRoutesComponent,
        children: [
          {
            path: '',
            component: SmartProductsListComponent,
            outlet: 'main',
          },
          {
            path: '',
            component: SideComponent,
            outlet: 'side',
          },
          {
            path: 'flipped',
            component: SideComponent,
            outlet: 'main',
          },
          {
            path: 'flipped',
            component: SmartProductsListComponent,
            outlet: 'side',
          },
        ],
      },
    ]),
    ProductStateModule,
    CartStateModule,
    TemplateDefaultModule,
    SmartProductsListModule,
  ],
  exports: [PageChildRoutesComponent],
})
export class PageChildRoutesModule {}
