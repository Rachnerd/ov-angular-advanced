import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';

import { ThumbnailComponent } from './thumbnail.component';
import { ThumbnailModule } from './thumbnail.module';

export default {
  title: 'Atoms/Thumbnail',
  component: ThumbnailComponent,
  decorators: [
    moduleMetadata({
      imports: [ThumbnailModule],
    }),
  ],
} as Meta;

const Template: StoryFn<ThumbnailComponent> = (args) => ({
  props: args,
});

export const Portrait = Template.bind({});
Portrait.args = {
  src: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  alt: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
};

export const Landscape = Template.bind({});
Landscape.args = {
  src: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
  alt: 'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
};
