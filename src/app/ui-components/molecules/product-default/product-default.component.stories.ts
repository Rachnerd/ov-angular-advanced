import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { ProductDefaultComponent } from './product-default.component';
import { ProductDefaultMock } from './product-default.component.mocks';
import { ProductDefaultModule } from './product-default.module';

export default {
  title: 'Molecules/ProductDefault',
  component: ProductDefaultComponent,
  decorators: [
    moduleMetadata({
      imports: [ProductDefaultModule],
    }),
  ],
} as Meta;

const Template: StoryFn<ProductDefaultComponent> = (args) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  product: ProductDefaultMock.PRIMARY,
};

export const MaxContent = Template.bind({});
MaxContent.args = {
  product: ProductDefaultMock.MAX_CONTENT,
};

export const MinContent = Template.bind({});
MinContent.args = {
  product: ProductDefaultMock.MIN_CONTENT,
};

export const InCart = Template.bind({});
InCart.args = {
  product: ProductDefaultMock.IN_CART,
};
