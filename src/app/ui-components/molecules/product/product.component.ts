import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  subtitle: string;
  image: string;
  rating: Rating;
}
export interface Rating {
  rate: number;
  count: number;
}

@Component({
  selector: 'ov-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;

  ngOnInit(): void {}
}
