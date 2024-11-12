import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import {
  SupportedIcon,
  IconComponent,
  SupportedColor,
  SupportedSize,
} from './icon.component';
import { IconModule } from './icon.module';

export default {
  title: 'Atoms/Icon',
  component: IconComponent,
  decorators: [
    moduleMetadata({
      imports: [IconModule],
    }),
  ],
} as Meta;

const ICONS: Record<SupportedIcon, true> = {
  'cart-plus': true,
  star: true,
  'star-half-o': true,
  'star-o': true,
  envelope: true,
};

const Template: StoryFn<Omit<IconComponent, 'icon'>> = (args) => ({
  props: args,
  template: `
  <ul class="sb">
  ${Object.keys(ICONS)
    .map(
      (icon) =>
        `<li class="sb">
          <ov-icon icon="${icon}" color="${args.color ?? 'black'}" size=${
          args.size
        }></ov-icon>
          <span class="sb-label">${icon}</span>
        </li>`
    )
    .join('')}
  </ul>
  `,
});

export const Icons = Template.bind({});
Icons.args = {};
Icons.argTypes = {
  icon: {
    table: {
      disable: true,
    },
  },
} as any;

const COLORS: Record<SupportedColor, true> = {
  primary: true,
  secondary: true,
  none: true,
  ok: true,
  error: true,
  white: true,
};

const ColorTemplate: StoryFn<Omit<IconComponent, 'color'>> = (args) => ({
  props: args,
  template: `
  <ul class="sb">
  ${Object.keys(COLORS)
    .map(
      (color) =>
        `<li class="sb">
          <ov-icon icon="${args.icon ?? 'star'}" color=${color} size=${
          args.size
        }></ov-icon>
        <span class="sb-label">${color}</span>
        </li>`
    )
    .join('')}
  </ul>
  `,
});

export const Colors = ColorTemplate.bind({});
Colors.args = {};
Colors.argTypes = {
  color: {
    table: {
      disable: true,
    },
  },
  icon: { control: 'select' },
} as any;

const SIZES: Record<SupportedSize, true> = {
  xxs: true,
  xs: true,
  sm: true,
  md: true,
  lg: true,
  xl: true,
  xxl: true,
};

const SizesTemplate: StoryFn<Omit<IconComponent, 'size'>> = (args) => ({
  props: args,
  template: `
  <ul class="sb">
  ${Object.keys(SIZES)
    .map(
      (size) =>
        `<li class="sb">
          <ov-icon icon="${args.icon ?? 'star'}" color=${
          args.color
        } size=${size}></ov-icon>
          <span class="sb-label">${size}</span>
        </li>`
    )
    .join('')}
  </ul>
  `,
});

export const Sizes = SizesTemplate.bind({});
Sizes.args = {};
Sizes.argTypes = {
  size: {
    table: {
      disable: true,
    },
  },
} as any;
