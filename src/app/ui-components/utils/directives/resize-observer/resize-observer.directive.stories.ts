import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { ResizeObserverDirective } from './resize-observer.directive';
import { ResizeObserverModule } from './resize-observer.module';

export default {
  title: 'Utils/ResizeObserver',
  component: ResizeObserverDirective,
  decorators: [
    moduleMetadata({
      imports: [ResizeObserverModule],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: StoryFn = () => ({
  template: `
    <section class="sb-resize-observer-example">
      <section [ovResizeObserver]="{ small: 0, large: 460 }" (resize)="isLarge1 = $event === 'large'" [class.isLarge]="isLarge1">
        {{ isLarge1 ? "I'm larger than 460" : "I'm smaller than 460" }}
      </section>
  `,
});

export const Primary = Template.bind({});

const SideBySideTemplate: StoryFn = () => ({
  template: `
    <section class="sb-resize-observer-example">
      <section [ovResizeObserver]="{ small: 0, large: 460 }" (resize)="isLarge1 = $event === 'large'" [class.isLarge]="isLarge1">
        {{ isLarge1 ? "I'm larger than 460" : "I'm smaller than 460" }}
      </section>
      <section [ovResizeObserver]="{ small: 0, large: 300 }" (resize)="isLarge2 = $event === 'large'" [class.isLarge]="isLarge2">
        {{ isLarge2 ? "I'm larger than 300" : "I'm smaller than 300" }}
      </section>
    </section>
  `,
});

export const SideBySide = SideBySideTemplate.bind({});
