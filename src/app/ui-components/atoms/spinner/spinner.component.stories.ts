import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { SpinnerComponent } from './spinner.component';
import { SpinnerModule } from './spinner.module';

export default {
  title: 'Atoms/Spinner',
  component: SpinnerComponent,
  decorators: [
    moduleMetadata({
      imports: [SpinnerModule],
    }),
  ],
} as Meta;

const Template: Story<SpinnerComponent> = (args) => ({
  props: args,
});

export const Primary = Template.bind({});

export const WithText = Template.bind({});
WithText.args = {
  text: 'Loading text...',
};
