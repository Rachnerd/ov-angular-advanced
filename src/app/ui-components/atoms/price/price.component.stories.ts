import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';

import { PriceComponent } from './price.component';
import { PriceModule } from './price.module';

export default {
  title: 'Atoms/Price',
  component: PriceComponent,
  decorators: [
    moduleMetadata({
      imports: [PriceModule],
    }),
  ],
} as Meta;

const Template: StoryFn<PriceComponent> = (args) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  amount: 10,
};

export const Min = Template.bind({});
Min.args = {
  amount: 0.01,
};

export const Max = Template.bind({});
Max.args = {
  amount: 10000,
};
