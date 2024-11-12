import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { QuantityPickerComponent } from './quantity-picker.component';
import { QuantityPickerMocks } from './quantity-picker.component.mocks';
import { QuantityPickerModule } from './quantity-picker.module';

export default {
  title: 'Molecules/QuantityPicker',
  component: QuantityPickerComponent,
  decorators: [
    moduleMetadata({
      imports: [QuantityPickerModule],
    }),
  ],
} as Meta;

const Template: StoryFn<QuantityPickerComponent> = (args) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  quantity: QuantityPickerMocks.PRIMARY,
};

export const WithSteps = Template.bind({});
WithSteps.args = {
  quantity: QuantityPickerMocks.WITH_STEPS,
};

export const WithMax = Template.bind({});
WithMax.args = {
  quantity: QuantityPickerMocks.WITH_MAX,
};

export const WithInput = Template.bind({});
WithInput.args = {
  quantity: QuantityPickerMocks.PRIMARY,
  showInput: true,
};

export const WithInputAndSteps = Template.bind({});
WithInputAndSteps.args = {
  quantity: QuantityPickerMocks.WITH_STEPS,
  showInput: true,
};
