import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';
import { getProducts } from '../state/product/product.actions';
import { ProductState } from '../state/product/product.reducer';
import {
  productFeatureKey,
  selectProductState,
} from '../state/product/product.selector';
import { ProductResolver } from './product.resolver';

describe('ProductResolver', () => {
  let store: MockStore<Record<typeof productFeatureKey, ProductState>>;
  let resolver: ProductResolver;
  const ACTIVATED_ROUTE_SNAPSHOT: ActivatedRouteSnapshot = {} as any;
  const ROUTER_STATE_SNAPSHOT: RouterStateSnapshot = {} as any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductResolver, provideMockStore()],
    });
    store = TestBed.inject(MockStore);
    resolver = TestBed.inject(ProductResolver);
  });

  it('should dispatch an action when the resolver is called', () => {
    spyOn(store, 'dispatch');
    resolver.resolve(ACTIVATED_ROUTE_SNAPSHOT, ROUTER_STATE_SNAPSHOT);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(
      getProducts({ page: 1, size: 6 })
    );
  });

  it('should resolve if products are in the state', () => {
    store.overrideSelector(selectProductState, { loading: false });
    const expected = cold('(a|)', { a: { loading: false } });
    expect(
      resolver.resolve(ACTIVATED_ROUTE_SNAPSHOT, ROUTER_STATE_SNAPSHOT)
    ).toBeObservable(expected);
  });

  it('should not resolve if products are being loaded', () => {
    store.overrideSelector(selectProductState, { loading: true });
    const expected = cold('');
    expect(
      resolver.resolve(ACTIVATED_ROUTE_SNAPSHOT, ROUTER_STATE_SNAPSHOT)
    ).toBeObservable(expected);
  });
});
