import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, merge, of, switchMap } from 'rxjs';
import * as CartActions from './cart.actions';
import { CartService } from './cart.service';

@Injectable()
export class CartEffects {
  getCart$ = createEffect(() =>
    merge(
      this.actions$.pipe(ofType(CartActions.getCart.type)),
      this.actions$.pipe(
        ofType(CartActions.getFullCart.type),
        map(() => ({
          page: 1,
          size: CartActions.FULL_CART_SIZE,
        }))
      )
    ).pipe(
      switchMap((payload) =>
        this.cartService.get(payload).pipe(
          map((cart) => CartActions.getCartSuccess({ cart })),
          catchError((error) => of(CartActions.getCartError({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private cartService: CartService) {}
}
