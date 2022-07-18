import { QuantityPickerMocks } from '../../molecules/quantity-picker/quantity-picker.component.mocks';
import { ProductMock } from '../product/product.component.mocks';
import { ProductDefault } from './product-default.component';

type MockKeys =
  | 'PRIMARY'
  | 'MAX_CONTENT'
  | 'MIN_CONTENT'
  | 'LANDSCAPE'
  | 'IN_CART';

export const ProductDefaultMock: Record<MockKeys, ProductDefault> = {
  PRIMARY: {
    ...ProductMock.PRIMARY,
    type: 'product',
    quantity: QuantityPickerMocks.PRIMARY,
    isLimited: false,
  },
  IN_CART: {
    ...ProductMock.PRIMARY,
    type: 'product',
    quantity: QuantityPickerMocks.PRIMARY,
    isLimited: false,
    cartInfo: {
      quantity: 6,
      total: ProductMock.PRIMARY.price! * 6,
    },
  },
  MAX_CONTENT: {
    ...ProductMock.MAX_CONTENT,
    type: 'product',
    quantity: QuantityPickerMocks.WITH_STEPS,
    isLimited: false,
  },
  MIN_CONTENT: {
    ...ProductMock.MIN_CONTENT,
    type: 'product',
    quantity: QuantityPickerMocks.MIN_QUANTITY,
    isLimited: true,
  },
  LANDSCAPE: {
    ...ProductMock.LANDSCAPE,
    type: 'product',
    quantity: QuantityPickerMocks.PRIMARY,
    isLimited: false,
  },
};
