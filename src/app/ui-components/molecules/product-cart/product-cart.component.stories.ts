import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ProductCartComponent } from './product-cart.component';
import { ProductCartMock } from './product-cart.component.mocks';
import { ProductCartModule } from './product-cart.module';

export default {
  title: 'Molecules/ProductCart',
  component: ProductCartComponent,
  decorators: [
    moduleMetadata({
      imports: [ProductCartModule],
    }),
  ],
} as Meta;

const Template: Story<ProductCartComponent> = (args) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  product: ProductCartMock.PRIMARY,
};

export const Min = Template.bind({});
Min.args = {
  product: ProductCartMock.MIN_CONTENT,
};

export const Max = Template.bind({});
Max.args = {
  product: ProductCartMock.MAX_CONTENT,
};
