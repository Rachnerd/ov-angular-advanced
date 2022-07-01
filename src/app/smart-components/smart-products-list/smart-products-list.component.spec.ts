import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MockComponents } from 'ng-mocks';
import { SpinnerComponent } from '../../ui-components/atoms/spinner/spinner.component';
import { ProductDefaultMock } from '../../ui-components/molecules/product-default/product-default.component.mocks';
import { ProductsListComponent } from '../../ui-components/organisms/products-list/products-list.component';
import { testUtils, TestUtils } from '../../utils/test.utils';
import { selectProductsList } from './selectors/select-products-list.selector';
import { SmartProductsListComponent } from './smart-products-list.component';

describe('SmartProductsListComponent', () => {
  let component: SmartProductsListComponent;
  let fixture: ComponentFixture<SmartProductsListComponent>;
  let store: MockStore;
  let utils: TestUtils;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SmartProductsListComponent,
        MockComponents(ProductsListComponent, SpinnerComponent),
      ],
      providers: [provideMockStore()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartProductsListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    utils = testUtils(fixture);
  });

  it('should render a spinner if the products are loading', () => {
    store.overrideSelector(selectProductsList, {
      data: [],
      loading: true,
    });
    fixture.detectChanges();
    expect(utils.component(SpinnerComponent)).not.toBeNull();
  });

  it('should render a message if an error occurred', () => {
    store.overrideSelector(selectProductsList, {
      error: new Error(),
      loading: false,
      data: [],
    });
    fixture.detectChanges();
    expect(utils.querySelector('[date-testid="error-message"]')).not.toBeNull();
  });

  it('should render list of products if fetched and not loading', () => {
    const PRODUCTS = [
      ProductDefaultMock.PRIMARY,
      ProductDefaultMock.MIN_CONTENT,
      ProductDefaultMock.MAX_CONTENT,
    ];
    store.overrideSelector(selectProductsList, {
      loading: false,
      data: PRODUCTS,
    });
    fixture.detectChanges();
    const productsList = utils.component(ProductsListComponent);
    expect(productsList.products).toEqual(
      PRODUCTS.map((product) => ({ ...product, cartInfo: undefined }))
    );
  });
});
