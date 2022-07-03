import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MockComponents } from 'ng-mocks';
import { getFullCart } from '../../state/cart/cart.actions';
import { getProducts } from '../../state/product/product.actions';
import { TemplateDefaultComponent } from '../../ui-components/templates/template-default/template-default.component';
import { PageChildRoutesComponent } from './page-child-routes.component';

describe('PageChildRoutesComponent', () => {
  let component: PageChildRoutesComponent;
  let fixture: ComponentFixture<PageChildRoutesComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PageChildRoutesComponent,
        MockComponents(TemplateDefaultComponent),
      ],
      providers: [provideMockStore()],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageChildRoutesComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
  });

  it('should dispatch getProducts adn getFullCart', () => {
    spyOn(store, 'dispatch');
    fixture.detectChanges();
    expect(store.dispatch).toHaveBeenCalledTimes(2);
    expect((store.dispatch as jasmine.Spy).calls.allArgs()).toEqual([
      [getProducts({ page: 1, size: 6 })],
      [getFullCart()],
    ]);
  });
});
