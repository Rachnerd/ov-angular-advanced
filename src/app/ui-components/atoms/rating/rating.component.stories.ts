import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { RatingModule } from './rating.module';
import { RatingComponent } from './rating.component';

export default {
  title: 'Atoms/Rating',
  component: RatingComponent,
  decorators: [
    moduleMetadata({
      imports: [RatingModule],
    }),
  ],
} as Meta;

const Template: StoryFn<RatingComponent> = (args) => ({
  props: args,
});

export const Empty = Template.bind({});
Empty.args = {
  rate: 0,
  count: 0,
};

export const Full = Template.bind({});
Full.args = {
  rate: 5,
  count: 999,
};

export const Half = Template.bind({});
Half.args = {
  rate: 2.5,
  count: 10,
};
