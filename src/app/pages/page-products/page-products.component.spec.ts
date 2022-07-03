import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MockComponents } from 'ng-mocks';
import { SmartProductsListComponent } from '../../smart-components/smart-products-list/smart-products-list.component';
import { getFullCart } from '../../state/cart/cart.actions';
import { getProducts } from '../../state/product/product.actions';
import { TemplateDefaultComponent } from '../../ui-components/templates/template-default/template-default.component';
import { PageProductsComponent } from './page-products.component';

describe('PageProductsComponent', () => {
  let component: PageProductsComponent;
  let fixture: ComponentFixture<PageProductsComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PageProductsComponent,
        MockComponents(SmartProductsListComponent, TemplateDefaultComponent),
      ],
      providers: [provideMockStore()],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProductsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
  });

  it("should dispatch getProducts if the route hasn't already resolved products", () => {
    spyOn(store, 'dispatch');
    fixture.detectChanges();
    expect(store.dispatch).toHaveBeenCalledTimes(2);
    expect((store.dispatch as jasmine.Spy).calls.allArgs()).toEqual([
      [getProducts({ page: 1, size: 6 })],
      [getFullCart()],
    ]);
  });

  it('should not dispatch getProducts if the route already resolved products', () => {
    const activatedRoute = TestBed.inject(ActivatedRoute);
    activatedRoute.snapshot.data['products'] = [];
    spyOn(store, 'dispatch');
    fixture.detectChanges();
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect((store.dispatch as jasmine.Spy).calls.allArgs()).toEqual([
      [getFullCart()],
    ]);
  });
});
