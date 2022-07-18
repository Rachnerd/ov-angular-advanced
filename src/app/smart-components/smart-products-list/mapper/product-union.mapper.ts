import { ProductUnionFragment } from '../../../../generated/graphql';
import { ProductUnion } from '../../../ui-components/organisms/products-list/products-list.component';

export const mapToProductUnion = (
  product: ProductUnionFragment
): ProductUnion =>
  product.__typename === 'ProductInStock'
    ? {
        type: 'product',
        ...product,
        subtitle: product.category,
        isLimited: product.limited,
        cartInfo: product.cartInfo ?? undefined,
      }
    : product.__typename === 'ProductOutOfStock'
    ? {
        type: 'product-out-of-stock',
        ...product,
        subtitle: product.category,
      }
    : {
        type: 'product-replaced',
        subtitle: product.category,
        ...product,
      };
