import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { delay, of } from 'rxjs';
import { ProductService } from '../../services/product/product.service';
import { ProductDefaultMock } from '../../ui-components/molecules/product-default/product-default.component.mocks';
import { ProductOutOfStockMock } from '../../ui-components/molecules/product-out-of-stock/product-out-of-stock.component.mocks';
import { ProductReplacementMock } from '../../ui-components/molecules/product-replaced/product-replaced.component.mocks';
import { PageProductsComponent } from './page-products.component';
import { PageProductsModule } from './page-products.module';

const products = [
  ProductDefaultMock.PRIMARY,
  ProductDefaultMock.MIN_CONTENT,
  ProductOutOfStockMock.MAX_CONTENT,
  ProductReplacementMock.MAX_CONTENT,
  ProductDefaultMock.MAX_CONTENT,
];

export default {
  title: 'Pages/Products',
  component: PageProductsComponent,
  decorators: [
    moduleMetadata({
      imports: [PageProductsModule],
      providers: [
        {
          provide: ProductService,
          useValue: {
            products$: of(products).pipe(delay(0)),
            get: () => {},
          },
        },
      ],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: StoryFn<PageProductsComponent> = (args) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
