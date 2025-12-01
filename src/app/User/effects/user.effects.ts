import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import * as UserActions from '../actions/user.actions';
import { UserService } from '../services/user.service';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadMe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadMe),
      exhaustMap(() =>
        this.userService.getMe().pipe(
          map((response) => UserActions.loadMeSuccess({ user: response.user })),
          catchError((error) => of(UserActions.loadMeFailure({ error })))
        )
      )
    )
  );
}
