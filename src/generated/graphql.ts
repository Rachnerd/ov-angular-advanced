import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Cart = {
  __typename: 'Cart';
  products: CartProducts;
  total: Scalars['Float'];
};

export type CartProduct = {
  __typename: 'CartProduct';
  id: Scalars['ID'];
  quantity: Scalars['Int'];
  total: Scalars['Float'];
};

export type CartProducts = {
  __typename: 'CartProducts';
  cartProducts: Array<CartProduct>;
  paginationInfo: PaginationInfo;
};

export type NotFound = {
  __typename: 'NotFound';
  id: Scalars['ID'];
  reason: Scalars['String'];
};

export type PaginationInfo = {
  __typename: 'PaginationInfo';
  page: Scalars['Int'];
  size: Scalars['Int'];
  totalPages: Scalars['Int'];
  totalResults: Scalars['Int'];
};

export type PaginationParams = {
  page: Scalars['Int'];
  size: Scalars['Int'];
};

export type Product = {
  category: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['ID'];
  image: Scalars['String'];
  price: Scalars['Float'];
  rating: Rating;
  title: Scalars['String'];
};

export type ProductInStock = Product & {
  __typename: 'ProductInStock';
  cartInfo?: Maybe<CartProduct>;
  category: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['ID'];
  image: Scalars['String'];
  limited: Scalars['Boolean'];
  price: Scalars['Float'];
  quantity: Quantity;
  rating: Rating;
  title: Scalars['String'];
};

export type ProductOutOfStock = Product & {
  __typename: 'ProductOutOfStock';
  category: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['ID'];
  image: Scalars['String'];
  price: Scalars['Float'];
  rating: Rating;
  title: Scalars['String'];
};

export type ProductReplaced = Product & {
  __typename: 'ProductReplaced';
  category: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['ID'];
  image: Scalars['String'];
  price: Scalars['Float'];
  rating: Rating;
  replacement: ProductInStock;
  title: Scalars['String'];
};

export type ProductResult = NotFound | ProductInStock | ProductOutOfStock | ProductReplaced;

export type Products = {
  __typename: 'Products';
  paginationInfo: PaginationInfo;
  results: Array<Product>;
};

export type Quantity = {
  __typename: 'Quantity';
  max: Scalars['Int'];
  min: Scalars['Int'];
  step: Scalars['Int'];
};

export type Query = {
  __typename: 'Query';
  cart: Cart;
  product: ProductReplaced;
  products: Products;
};


export type QueryCartArgs = {
  pagination?: InputMaybe<PaginationParams>;
};


export type QueryProductArgs = {
  id: Scalars['ID'];
};


export type QueryProductsArgs = {
  pagination: PaginationParams;
};

export type Rating = {
  __typename: 'Rating';
  count: Scalars['Int'];
  rate: Scalars['Float'];
};

type ProductUnion_ProductInStock_Fragment = { __typename: 'ProductInStock', limited: boolean, id: string, title: string, price: number, description: string, category: string, image: string, quantity: { __typename: 'Quantity', min: number, step: number, max: number }, cartInfo?: { __typename: 'CartProduct', id: string, quantity: number, total: number } | null, rating: { __typename: 'Rating', count: number, rate: number } };

type ProductUnion_ProductOutOfStock_Fragment = { __typename: 'ProductOutOfStock', id: string, title: string, price: number, description: string, category: string, image: string, rating: { __typename: 'Rating', count: number, rate: number } };

type ProductUnion_ProductReplaced_Fragment = { __typename: 'ProductReplaced', id: string, title: string, price: number, description: string, category: string, image: string, replacement: { __typename: 'ProductInStock', id: string, title: string }, rating: { __typename: 'Rating', count: number, rate: number } };

export type ProductUnionFragment = ProductUnion_ProductInStock_Fragment | ProductUnion_ProductOutOfStock_Fragment | ProductUnion_ProductReplaced_Fragment;

export type ProductsListQueryVariables = Exact<{
  page: Scalars['Int'];
  size: Scalars['Int'];
}>;


export type ProductsListQuery = { __typename: 'Query', products: { __typename: 'Products', results: Array<{ __typename: 'ProductInStock', limited: boolean, id: string, title: string, price: number, description: string, category: string, image: string, quantity: { __typename: 'Quantity', min: number, step: number, max: number }, cartInfo?: { __typename: 'CartProduct', id: string, quantity: number, total: number } | null, rating: { __typename: 'Rating', count: number, rate: number } } | { __typename: 'ProductOutOfStock', id: string, title: string, price: number, description: string, category: string, image: string, rating: { __typename: 'Rating', count: number, rate: number } } | { __typename: 'ProductReplaced', id: string, title: string, price: number, description: string, category: string, image: string, replacement: { __typename: 'ProductInStock', id: string, title: string }, rating: { __typename: 'Rating', count: number, rate: number } }> } };

export const ProductUnionFragmentDoc = gql`
    fragment ProductUnion on Product {
  id
  title
  price
  description
  category
  image
  rating {
    count
    rate
  }
  ... on ProductInStock {
    quantity {
      min
      step
      max
    }
    limited
    cartInfo {
      id
      quantity
      total
    }
  }
  ... on ProductReplaced {
    replacement {
      id
      title
    }
  }
}
    `;
export const ProductsListDocument = gql`
    query ProductsList($page: Int!, $size: Int!) {
  products(pagination: {page: $page, size: $size}) {
    results {
      ...ProductUnion
    }
  }
}
    ${ProductUnionFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ProductsListGQL extends Apollo.Query<ProductsListQuery, ProductsListQueryVariables> {
    override document = ProductsListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }