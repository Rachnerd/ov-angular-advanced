import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { ProductDefault } from '../../molecules/product-default/product-default.component';
import { ProductOutOfStock } from '../../molecules/product-out-of-stock/product-out-of-stock.component';
import { ProductReplaced } from '../../molecules/product-replaced/product-replaced.component';

export type ProductUnion = ProductDefault | ProductReplaced | ProductOutOfStock;

export interface AddToCartEvent {
  product: ProductDefault;
  quantity: number;
}

@Component({
  selector: 'ov-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
  @Input() products!: ProductUnion[];

  @Output() addToCart = new EventEmitter<AddToCartEvent>();

  productIntersectionMargin = '-200px 0px -350px 0px';

  ngOnInit(): void {}

  asProduct(product: ProductUnion): ProductDefault | undefined {
    return product.type === 'product' ? product : undefined;
  }

  asProductOutOfStock(product: ProductUnion): ProductOutOfStock | undefined {
    return product.type === 'product-out-of-stock' ? product : undefined;
  }

  asProductReplaced(product: ProductUnion): ProductReplaced | undefined {
    return product.type === 'product-replaced' ? product : undefined;
  }

  addProductToCart(quantity: number, product: ProductDefault) {
    this.addToCart.emit({
      product,
      quantity,
    });
  }

  productIntersect({ target, isIntersecting }: IntersectionObserverEntry) {
    if (isIntersecting) {
      target.classList.add('visible');
    } else {
      target.classList.remove('visible');
    }
  }
}