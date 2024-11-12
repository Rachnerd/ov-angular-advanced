import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { ProductReplacedComponent } from './product-replaced.component';
import { ProductReplacementMock } from './product-replaced.component.mocks';
import { ProductReplacedModule } from './product-replaced.module';

export default {
  title: 'Molecules/ProductReplaced',
  component: ProductReplacedComponent,
  decorators: [
    moduleMetadata({
      imports: [ProductReplacedModule],
    }),
  ],
} as Meta;

const Template: StoryFn<ProductReplacedComponent> = (args) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  product: ProductReplacementMock.PRIMARY,
};

export const MaxContent = Template.bind({});
MaxContent.args = {
  product: ProductReplacementMock.MAX_CONTENT,
};

export const MinContent = Template.bind({});
MinContent.args = {
  product: ProductReplacementMock.MIN_CONTENT,
};
