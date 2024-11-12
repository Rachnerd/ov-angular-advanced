import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';

import { TitleComponent } from './title.component';
import { TitleModule } from './title.module';

export default {
  title: 'Atoms/Title',
  component: TitleComponent,
  decorators: [
    moduleMetadata({
      imports: [TitleModule],
    }),
  ],
} as Meta;

const Template: StoryFn<TitleComponent> = (args) => ({
  props: args,
  template: `<ov-title>Lorem ipsum</ov-title>`,
});

export const Primary = Template.bind({});
Primary.args = {};

const LongTextTemplate: StoryFn<TitleComponent> = (args) => ({
  props: args,
  template: `<ov-title [lineClamp]="lineClamp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut sodales augue, eget pellentesque urna. Duis eleifend enim quis velit posuere porttitor. Nam facilisis metus id turpis vehicula fermentum. Nunc sollicitudin blandit molestie. Vestibulum varius massa euismod massa egestas tincidunt. Proin laoreet odio vel sollicitudin imperdiet. Cras volutpat id odio id ultrices. Suspendisse sodales rutrum tortor, ultrices consectetur ante tincidunt sit amet. Donec laoreet arcu metus, at efficitur nibh placerat ac.</ov-title>`,
});

export const LongText = LongTextTemplate.bind({});
LongText.args = {
  lineClamp: 2,
};
