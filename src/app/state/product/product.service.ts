import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { ApiProductMock } from './product.mock';

export interface ApiProduct {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ApiRating;
  quantity: ApiQuantity;
}

export interface ApiRating {
  rate: number;
  count: number;
}

export interface ApiQuantity {
  min: number;
  step: number;
  max: number;
}

interface GetProductsParams {
  limit?: number;
}

const mockProductsArray = Object.keys(ApiProductMock).map(
  (key) => ApiProductMock[key as keyof typeof ApiProductMock]
);
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  /**
   * Fake API call
   * @param param0 GetProductsParams that represent values sent to the server.
   * @returns Observable ApiProduct[]
   */
  get({ limit }: GetProductsParams): Observable<ApiProduct[]> {
    let count = -1;
    return of(
      Array.from(
        { length: limit ?? 10 },
        () =>
          mockProductsArray[
            count === mockProductsArray.length - 1 ? (count = 0) : ++count
          ]
      )
    ).pipe(delay(100));
  }
}
