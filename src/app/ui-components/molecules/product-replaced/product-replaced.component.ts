import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Product } from '../../molecules/product/product.component';

export interface ProductReplaced extends Product {
  type: 'product-replaced';
  replacement: Pick<Product, 'id' | 'title'>;
}

@Component({
  selector: 'ov-product-replaced',
  templateUrl: './product-replaced.component.html',
  styleUrls: ['./product-replaced.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductReplacedComponent implements OnInit {
  @Input() product!: ProductReplaced;

  constructor() {}

  ngOnInit(): void {}
}
