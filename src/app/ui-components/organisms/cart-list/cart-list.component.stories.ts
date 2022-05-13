import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ProductCartMock } from '../../molecules/product-cart/product-cart.component.mocks';
import { CartListComponent } from './cart-list.component';
import { CartListModule } from './cart-list.module';

export default {
  title: 'Organisms/CartList',
  component: CartListComponent,
  decorators: [
    moduleMetadata({
      imports: [CartListModule],
    }),
  ],
} as Meta;

const Template: Story<CartListComponent> = (args) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  products: [
    ProductCartMock.PRIMARY,
    ProductCartMock.MIN_CONTENT,
    ProductCartMock.MAX_CONTENT,
  ],
  totalPrice: 1000,
};

export const Empty = Template.bind({});
Empty.args = {
  products: [],
  totalPrice: 0,
};
