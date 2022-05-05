import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getProducts } from '../../state/product/product.actions';

@Component({
  selector: 'ov-page-child-routes',
  templateUrl: './page-child-routes.component.html',
  styleUrls: ['./page-child-routes.component.scss'],
})
export class PageChildRoutesComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getProducts({ limit: 6 }));
  }
}
