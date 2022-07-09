import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, merge, of, switchMap } from 'rxjs';
import * as CartActions from './cart.actions';
import { CartService } from './cart.service';

@Injectable()
export class CartEffects {
  getCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType<ReturnType<typeof CartActions.getCart>>(CartActions.getCart.type),
      switchMap((action) =>
        this.cartService.get(action.pagination).pipe(
          map((cart) => CartActions.getCartSuccess({ cart })),
          catchError((error) => of(CartActions.getCartError({ error })))
        )
      )
    )
  );

  addToCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType<ReturnType<typeof CartActions.addToCart>>(
        CartActions.addToCart.type
      ),
      switchMap((action) =>
        this.cartService.post(action.product).pipe(
          map(() => CartActions.addToCartSuccess({ product: action.product })),
          catchError((error) => of(CartActions.addToCartError({ error })))
        )
      )
    )
  );

  updateQuantity$ = createEffect(() =>
    this.actions$.pipe(
      ofType<ReturnType<typeof CartActions.updateQuantity>>(
        CartActions.updateQuantity.type
      ),
      switchMap((action) =>
        this.cartService.update(action).pipe(
          map(() => CartActions.updateQuantitySuccess(action)),
          catchError((error) => of(CartActions.updateQuantityError({ error })))
        )
      )
    )
  );

  deleteFromCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType<ReturnType<typeof CartActions.deleteFromCart>>(
        CartActions.deleteFromCart.type
      ),
      switchMap((action) =>
        this.cartService.delete(action).pipe(
          map(() => CartActions.deleteFromCartSuccess(action)),
          catchError((error) => of(CartActions.deleteFromCartError({ error })))
        )
      )
    )
  );

  updateCart$ = createEffect(() =>
    merge(
      this.actions$.pipe(
        ofType<ReturnType<typeof CartActions.updateQuantitySuccess>>(
          CartActions.updateQuantitySuccess.type
        )
      ),
      this.actions$.pipe(
        ofType<ReturnType<typeof CartActions.addToCartSuccess>>(
          CartActions.addToCartSuccess.type
        )
      ),
      this.actions$.pipe(
        ofType<ReturnType<typeof CartActions.deleteFromCartSuccess>>(
          CartActions.deleteFromCartSuccess.type
        )
      )
    ).pipe(map(() => CartActions.getCart({})))
  );

  constructor(private actions$: Actions, private cartService: CartService) {}
}
