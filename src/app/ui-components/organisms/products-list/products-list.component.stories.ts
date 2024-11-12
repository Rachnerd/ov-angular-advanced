import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { ProductDefaultMock } from '../../molecules/product-default/product-default.component.mocks';
import { ProductOutOfStockMock } from '../../molecules/product-out-of-stock/product-out-of-stock.component.mocks';
import { ProductReplacementMock } from '../../molecules/product-replaced/product-replaced.component.mocks';
import { ProductsListComponent } from './products-list.component';
import { ProductsListModule } from './products-list.module';

export default {
  title: 'Organisms/ProductsList',
  component: ProductsListComponent,
  decorators: [
    moduleMetadata({
      imports: [ProductsListModule],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: StoryFn<ProductsListComponent> = (args) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  products: [
    ProductDefaultMock.PRIMARY,
    ProductDefaultMock.MIN_CONTENT,
    ProductOutOfStockMock.MAX_CONTENT,
    ProductReplacementMock.MAX_CONTENT,
    ProductDefaultMock.MAX_CONTENT,
  ],
};
