import { ProductCart } from './product-cart.component';

type MockKeys = 'PRIMARY' | 'MAX_CONTENT' | 'MIN_CONTENT';

export const ProductCartMock: Record<MockKeys, ProductCart> = {
  PRIMARY: {
    id: '1',
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    quantity: {
      min: 1,
      step: 1,
      max: 100,
    },
    cartInfo: {
      quantity: 1,
      total: 109.95,
    },
  },
  MAX_CONTENT: {
    id: '2',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut sodales augue, eget pellentesque urna. Duis eleifend enim quis velit posuere porttitor. Nam facilisis metus id turpis vehicula fermentum. Nunc sollicitudin blandit molestie. Vestibulum varius massa euismod massa egestas tincidunt. Proin laoreet odio vel sollicitudin imperdiet. Cras volutpat id odio id ultrices. Suspendisse sodales rutrum tortor, ultrices consectetur ante tincidunt sit amet. Donec laoreet arcu metus, at efficitur nibh placerat ac.',
    price: 10000,
    image: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
    quantity: {
      min: 10,
      step: 5,
      max: 100,
    },
    cartInfo: {
      quantity: 10,
      total: 100000,
    },
  },
  MIN_CONTENT: {
    id: '3',
    title: 'Ring',
    price: 0.01,
    image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
    quantity: {
      min: 1,
      step: 1,
      max: 1,
    },
    cartInfo: {
      quantity: 1,
      total: 0.01,
    },
  },
};
