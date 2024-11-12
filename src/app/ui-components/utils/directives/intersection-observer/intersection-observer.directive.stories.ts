import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { IntersectionObserverDirective } from './intersection-observer.directive';
import { IntersectionObserverModule } from './intersection-observer.module';

export default {
  title: 'Utils/IntersectionObserver',
  component: IntersectionObserverDirective,
  decorators: [
    moduleMetadata({
      imports: [IntersectionObserverModule],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const PercentagesTemplate: StoryFn = () => ({
  template: `
    <ul class="sb-intersection-observer-example" #list>
      <h1>Margin: '-30% 0px -40% 0px</h1>
      <li *ngFor="let i of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" 
          [ovIntersectionObserver]="'-30% 0px -40% 0px'" 
          (intersect)="isVisibles = isVisibles ?? []; isVisibles[i] = $event.isIntersecting" 
          [class.visible]="isVisibles ? isVisibles[i] : false">
        {{ i }}
      </li>
    </ul>
  `,
});

export const Percentages = PercentagesTemplate.bind({});

const PixelsTemplate: StoryFn = () => ({
  template: `
    <ul class="sb-intersection-observer-example" #list>
      <h1>Margin: '-250px 0px -400px 0px'</h1>
      <li *ngFor="let i of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" 
          [ovIntersectionObserver]="'-250px 0px -400px 0px'" 
          (intersect)="isVisibles = isVisibles ?? []; isVisibles[i] = $event.isIntersecting" 
          [class.visible]="isVisibles ? isVisibles[i] : false">
        {{ i }}
      </li>
    </ul>
  `,
});

export const Pixels = PixelsTemplate.bind({});
