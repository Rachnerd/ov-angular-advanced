import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { BREAKPOINT_ORDER } from '../../services/breakpoint/breakpoint.service';
import { IfBreakpointDirective } from './if-breakpoint.directive';
import { IfBreakpointModule } from './if-breakpoint.module';

export default {
  title: 'Utils/IfBreakpoint',
  component: IfBreakpointDirective,
  decorators: [
    moduleMetadata({
      imports: [IfBreakpointModule],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: StoryFn = () => ({
  template: `
    <section class="sb-breakpoint-example">
      <span>Current breakpoint:</span>
       ${BREAKPOINT_ORDER.map(
         (breakpoint) =>
           `<span class="breakpoint" *ovIfBreakpoint="'${breakpoint}'">${breakpoint}</span>`
       ).join('')}
    </section>
  `,
});

export const Primary = Template.bind({});

const RangeTemplate: StoryFn = () => ({
  template: `
    <section class="sb-breakpoint-example">
      <ul>
        <li>
          <span class="breakpoint" *ovIfBreakpoint="'sm'; to 'md';">Show on: 'xs'; to 'md';</span>
        </li>
        <li>
          <span class="breakpoint" *ovIfBreakpoint="'md'; to 'lg';">Show on: 'md'; to 'lg';</span>
        </li>
        <li>
          <span class="breakpoint" *ovIfBreakpoint="'lg'; to 'xl';">Show on: 'lg'; to 'xl';</span>
        </li>
      </ul>
    </section>
  `,
});

export const Range = RangeTemplate.bind({});

const ElseTemplate: StoryFn = () => ({
  template: `
    <section class="sb-breakpoint-example">
      <span *ovIfBreakpoint="'sm'; else other" style="color: green">We're on sm</span>
      <ng-template #other>
        <span style="color: red">We're not on sm</span>
      </ng-template>
    </section>
  `,
});

export const Else = ElseTemplate.bind({});

const ElseRangeTemplate: StoryFn = () => ({
  template: `
    <section class="sb-breakpoint-example">
      <span *ovIfBreakpoint="'sm'; to 'md'; else other" style="color: green">We're on sm to md</span>
      <ng-template #other>
        <span style="color: red">We're not on sm to md</span>
      </ng-template>
    </section>
  `,
});

export const ElseRange = ElseRangeTemplate.bind({});
