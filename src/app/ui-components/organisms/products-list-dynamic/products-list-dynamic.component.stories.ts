import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { ProductDefaultMock } from '../../molecules/product-default/product-default.component.mocks';
import { ProductOutOfStockMock } from '../../molecules/product-out-of-stock/product-out-of-stock.component.mocks';
import { ProductReplacementMock } from '../../molecules/product-replaced/product-replaced.component.mocks';
import { ProductsListDynamicComponent } from './products-list-dynamic.component';
import { ProductsListDynamicModule } from './products-list-dynamic.module';

export default {
  title: 'Organisms/ProductsListDynamic',
  component: ProductsListDynamicComponent,
  decorators: [
    moduleMetadata({
      imports: [ProductsListDynamicModule],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: StoryFn<ProductsListDynamicComponent> = (args) => ({
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
