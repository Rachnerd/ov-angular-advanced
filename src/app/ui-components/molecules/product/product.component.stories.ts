import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { ProductComponent } from './product.component';
import { ProductMock } from './product.component.mocks';
import { ProductModule } from './product.module';

export default {
  title: 'Molecules/Product',
  component: ProductComponent,
  decorators: [
    moduleMetadata({
      imports: [ProductModule],
    }),
  ],
} as Meta;

const Template: StoryFn<ProductComponent> = (args) => ({
  props: args,
  template: `
  <ov-product [product]="product">

  </ov-product>`,
});

export const Primary = Template.bind({});
Primary.args = {
  product: ProductMock.PRIMARY,
};

export const MaxContent = Template.bind({});
MaxContent.args = {
  product: ProductMock.MAX_CONTENT,
};

export const MinContent = Template.bind({});
MinContent.args = {
  product: ProductMock.MIN_CONTENT,
};
