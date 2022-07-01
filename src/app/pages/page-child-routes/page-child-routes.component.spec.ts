import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { MockComponents } from 'ng-mocks';
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
    fixture.detectChanges();
  });

  it("should dispatch getProducts if the route hasn't already resolved products", () => {
    fixture.detectChanges();
    expect(store.scannedActions$).toBeObservable(
      hot('a', { a: getProducts({ page: 1, size: 6 }) })
    );
  });
});
