import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { TemplateDefaultComponent } from './template-default.component';
import { TemplateDefaultModule } from './template-default.module';

export default {
  title: 'Templates/Default',
  component: TemplateDefaultComponent,
  decorators: [
    moduleMetadata({
      imports: [TemplateDefaultModule],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: StoryFn<TemplateDefaultComponent> = (args) => ({
  props: args,
  template: `
    <ov-template-default>
      <section header class="placeholder" style="height: 84px;">Header</section>
      <section main class="placeholder" style="min-height: 512px">
        Main
      </section>
      <section footer class="placeholder" style="height: 84px;">Footer</section>
    </ov-template-default>
  `,
});

export const Primary = Template.bind({});

const TemplateComplete: StoryFn<TemplateDefaultComponent> = (args) => ({
  props: args,
  template: `
    <ov-template-default>
      <section header class="placeholder" style="height: 84px;">Header</section>
      <ng-template ovSide>
        <section class="placeholder" style="min-height: 512px">
          Side
        </section>
      </ng-template>
      <section main class="placeholder" style="min-height: 512px">
        Main
      </section>
      <section footer class="placeholder" style="height: 84px;">Footer</section>
    </ov-template-default>
  `,
});

export const WithSideContent = TemplateComplete.bind({});
