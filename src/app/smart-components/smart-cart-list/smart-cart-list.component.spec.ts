import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartCartListComponent } from './smart-cart-list.component';

describe('SmartCartListComponent', () => {
  let component: SmartCartListComponent;
  let fixture: ComponentFixture<SmartCartListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartCartListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartCartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
