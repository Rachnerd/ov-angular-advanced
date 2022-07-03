import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PaginationParams } from '../../utils/pagination.utils';

export interface ApiProduct {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ApiRating;
  quantity?: ApiQuantity;
  replacement?: ApiProduct;
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

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}
  /**
   * Fake API call
   * @param param0 GetProductsParams that represent values sent to the server.
   * @returns Observable ApiProduct[]
   */
  get({ page, size }: PaginationParams): Observable<ApiProduct[]> {
    return this.httpClient
      .get<{ results: ApiProduct[] }>(
        `http://localhost:8080/products?page=${page}&size=${size}`
      )
      .pipe(
        map(({ results }) => results)
        // delay(3000)
      );
  }
}
