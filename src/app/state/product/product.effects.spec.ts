import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of, throwError } from 'rxjs';
import {
  getProducts,
  getProductsError,
  getProductsSuccess,
} from './product.actions';
import { ProductEffects } from './product.effects';
import { ApiProductMock } from './product.mock';
import { ApiProduct, ProductService } from './product.service';

describe('Product Effects', () => {
  let actions: Observable<any>;
  let effects: ProductEffects;
  let productServiceGetSpy: jasmine.Spy;

  const TEST_DATA: ApiProduct[] = [
    ApiProductMock.PRIMARY,
    ApiProductMock.MAX_CONTENT,
    ApiProductMock.MIN_CONTENT,
  ];

  beforeEach(async () => {
    productServiceGetSpy = jasmine.createSpy();
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot([]),
        EffectsModule.forRoot([ProductEffects]),
      ],
      providers: [
        provideMockActions(() => actions),
        {
          provide: ProductService,
          useValue: {
            get: productServiceGetSpy,
          },
        },
      ],
    }).compileComponents();
  });

  it('should dispatch a success action if the call succeeded', () => {
    actions = hot('a', { a: getProducts({ page: 1, size: 6 }) });

    productServiceGetSpy.and.returnValue(of(TEST_DATA));

    effects = TestBed.inject(ProductEffects);
    expect(effects.getProducts$).toBeObservable(
      cold('a', { a: getProductsSuccess({ products: TEST_DATA }) })
    );
  });

  it('should dispatch an error action if the call failed', () => {
    actions = hot('a', { a: getProducts({ page: 1, size: 6 }) });

    productServiceGetSpy.and.returnValue(
      throwError(() => Error('Something went wrong'))
    );

    effects = TestBed.inject(ProductEffects);
    expect(effects.getProducts$).toBeObservable(
      cold('a', {
        a: getProductsError({ error: Error('Something went wrong') }),
      })
    );
  });
});
