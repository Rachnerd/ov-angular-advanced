import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { SmartCartListComponent } from './smart-cart-list.component';
import { SmartCartListModule } from './smart-cart-list.module';

describe('SmartCartListComponent', () => {
  let component: SmartCartListComponent;
  let fixture: ComponentFixture<SmartCartListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmartCartListComponent],
      imports: [SmartCartListModule],
      providers: [provideMockStore()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartCartListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
