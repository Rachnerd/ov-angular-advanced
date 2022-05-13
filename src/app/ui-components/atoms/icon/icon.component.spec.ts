import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconComponent } from './icon.component';

describe('IconComponent', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
  });

  it('should set primary color by default', () => {
    expect(component.color).toEqual('primary');
  });

  it('should set md size by default', () => {
    expect(component.size).toEqual('md');
  });

  it('should set a class with type, size and color info', () => {
    component.icon = 'star';
    component.size = 'xxl';
    component.color = 'secondary';
    fixture.detectChanges();
    const { classList } = fixture.nativeElement.querySelector('i');
    expect(classList).toContain('fa');
    expect(classList).toContain('fa-star');
    expect(classList).toContain('xxl');
    expect(classList).toContain('secondary');
  });

  describe('API', () => {
    it('should support color', () => {
      const colors: Record<Required<IconComponent>['color'], true> = {
        primary: true,
        ok: true,
        error: true,
        none: true,
        secondary: true,
        white: true,
      };
      expect(colors).toBeTruthy();
    });

    it('should support icon', () => {
      const icons: Record<Required<IconComponent>['icon'], true> = {
        'cart-plus': true,
        'star-half-o': true,
        'star-o': true,
        envelope: true,
        star: true,
        minus: true,
        plus: true,
      };
      expect(icons).toBeTruthy();
    });

    it('should support size', () => {
      const sizes: Record<Required<IconComponent>['size'], true> = {
        xxs: true,
        xs: true,
        sm: true,
        md: true,
        lg: true,
        xl: true,
        xxl: true,
      };
      expect(sizes).toBeTruthy();
    });
  });
});
