import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { MessageComponent, MessageType } from './message.component';
import { MessageModule } from './message.module';

export default {
  title: 'Atoms/Message',
  component: MessageComponent,
  decorators: [
    moduleMetadata({
      imports: [MessageModule],
    }),
  ],
} as Meta;

const TYPES: Record<MessageType, true> = {
  ok: true,
  warn: true,
  error: true,
};

const Template: StoryFn<MessageComponent> = (args) => ({
  props: args,
  template: `
  <ul class="sb">
  ${Object.keys(TYPES)
    .map(
      (type) =>
        `<li class="sb">
          <ov-message type="${type}">${type} message!</ov-message>
        </li>`
    )
    .join('<br/>')}
  </ul>
  `,
});

export const Primary = Template.bind({});
Primary.args = {};
