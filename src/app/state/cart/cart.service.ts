import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Normalized } from '../../utils/normalization.utils';
import { Pagination, PaginationParams } from '../../utils/pagination.utils';

export interface CartProduct {
  id: string;
  quantity: number;
  total: number;
}

export interface Cart {
  total: number;
  products: Normalized<CartProduct>;
}

export interface ApiCart {
  total: number;
  products: Normalized<CartProduct>;
}

export interface PaginatedCart {
  products: Pagination<CartProduct>;
  total: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private httpClient: HttpClient) {}

  get(pagination?: PaginationParams): Observable<PaginatedCart> {
    return this.httpClient.get<PaginatedCart>(
      `http://localhost:8080/cart${
        pagination ? `?page=${pagination.page}&size=${pagination.size}` : ``
      }`
    );
  }
}
