import { TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { cold } from 'jasmine-marbles';
import { emptySet } from '../../utils/normalization.utils';
import {
  getProducts,
  getProductsError,
  getProductsSuccess,
} from './product.actions';
import { ApiProductMock } from './product.mock';
import { productReducer } from './product.reducer';
import { selectProductState } from './product.selector';

describe('Product Reducer', () => {
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({ product: productReducer })],
    }).compileComponents();

    store = TestBed.inject(Store);
  });

  it('should initialize state', () => {
    expect(store.select(selectProductState)).toBeObservable(
      cold('a', {
        a: {
          loading: false,
          data: emptySet(),
        },
      })
    );
  });

  it('should start loading', () => {
    store.dispatch(getProducts({ page: 1, size: 6 }));
    expect(store.select(selectProductState)).toBeObservable(
      cold('a', {
        a: {
          data: emptySet(),
          loading: true,
        },
      })
    );
  });

  it('should save products', () => {
    const TEST_DATA = [
      ApiProductMock.PRIMARY,
      ApiProductMock.MAX_CONTENT,
      ApiProductMock.MIN_CONTENT,
    ];
    store.dispatch(
      getProductsSuccess({
        products: TEST_DATA,
      })
    );
    expect(store.select(selectProductState)).toBeObservable(
      cold('a', {
        a: {
          data: {
            byId: {
              '1': TEST_DATA[0],
              '2': TEST_DATA[1],
              '3': TEST_DATA[2],
            },
            allIds: ['1', '2', '3'],
          },
          loading: false,
        },
      })
    );
  });

  it('should combine new products with existing products', () => {
    const TEST_DATA = [
      ApiProductMock.PRIMARY,
      ApiProductMock.MAX_CONTENT,
      ApiProductMock.MIN_CONTENT,
    ];
    store.dispatch(
      getProductsSuccess({
        products: TEST_DATA,
      })
    );

    const ADDITIONAL_TEST_DATA = TEST_DATA.map((product, i) => ({
      ...product,
      id: (3 + 1 + i).toString(),
    }));
    store.dispatch(
      getProductsSuccess({
        products: ADDITIONAL_TEST_DATA,
      })
    );

    expect(store.select(selectProductState)).toBeObservable(
      cold('a', {
        a: {
          data: {
            byId: {
              '1': TEST_DATA[0],
              '2': TEST_DATA[1],
              '3': TEST_DATA[2],
              '4': ADDITIONAL_TEST_DATA[0],
              '5': ADDITIONAL_TEST_DATA[1],
              '6': ADDITIONAL_TEST_DATA[2],
            },
            allIds: ['1', '2', '3', '4', '5', '6'],
          },
          loading: false,
        },
      })
    );
  });

  it('should set an error', () => {
    store.dispatch(getProductsError({ error: Error('error') }));
    expect(store.select(selectProductState)).toBeObservable(
      cold('a', {
        a: {
          data: emptySet(),
          loading: false,
          error: Error('error'),
        },
      })
    );
  });
});
