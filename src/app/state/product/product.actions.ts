import { createAction, props } from '@ngrx/store';
import { ApiProduct } from './product.service';

export const saveProducts = createAction(
  '[Products] Save',
  props<{ products: ApiProduct[] }>()
);

export const getProducts = createAction(
  '[Products] Get',
  props<{ page: number; size: number }>()
);

export const getProductsSuccess = createAction(
  '[Products] Get Success',
  props<{ products: ApiProduct[] }>()
);

export const getProductsError = createAction(
  '[Products] Get Error',
  props<{ error: Error }>()
);
