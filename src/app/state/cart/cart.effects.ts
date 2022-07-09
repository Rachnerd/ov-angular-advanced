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

  constructor(private actions$: Actions, private cartService: CartService) {}
}
