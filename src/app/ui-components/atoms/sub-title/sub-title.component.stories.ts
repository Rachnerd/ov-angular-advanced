import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { ThumbnailComponent } from '../thumbnail/thumbnail.component';
import { SubTitleComponent } from './sub-title.component';
import { SubTitleModule } from './sub-title.module';

export default {
  title: 'Atoms/SubTitle',
  component: SubTitleComponent,
  decorators: [
    moduleMetadata({
      imports: [SubTitleModule],
    }),
  ],
} as Meta;

const Template: StoryFn<ThumbnailComponent> = (args) => ({
  props: args,
  template: `<ov-sub-title>Lorem ipsum</ov-sub-title>`,
});

export const Primary = Template.bind({});
Primary.args = {};

const LongTextTemplate: StoryFn = (args) => ({
  props: args,
  template: `<ov-sub-title>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut sodales augue, eget pellentesque urna. Duis eleifend enim quis velit posuere porttitor. Nam facilisis metus id turpis vehicula fermentum. Nunc sollicitudin blandit molestie. Vestibulum varius massa euismod massa egestas tincidunt. Proin laoreet odio vel sollicitudin imperdiet. Cras volutpat id odio id ultrices. Suspendisse sodales rutrum tortor, ultrices consectetur ante tincidunt sit amet. Donec laoreet arcu metus, at efficitur nibh placerat ac.</ov-sub-title>`,
});

export const LongText = LongTextTemplate.bind({});
LongText.args = {};
