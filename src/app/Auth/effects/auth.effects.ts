import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { NotificationService } from '../../Shared/Services/notification.service';
import { SharedService } from '../../Shared/Services/shared.service';
import * as AuthActions from '../actions/auth.actions';
import { AuthDTO } from '../models/auth.dto';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private sharedService: SharedService,
    private notificationService: NotificationService
  ) {}

  // LOGIN
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      exhaustMap(({ credentials }) =>
        this.authService.login(credentials).pipe(
          map((tokenResponse) => {
            const credentialsTemp: AuthDTO = {
              email: credentials.email,
              password: credentials.password,
              user_id: '',
              access_token: tokenResponse.access_token,
              token_type: tokenResponse.token_type,
            };

            localStorage.setItem('access_token', tokenResponse.access_token);

            return AuthActions.loginSuccess({ credentials: credentialsTemp });
          }),
          catchError((error) =>
            of(AuthActions.loginFailure({ payload: error }))
          )
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap(() => {
          this.notificationService.showInfo('Sesión iniciada');
          this.router.navigateByUrl('home');
        })
      ),
    { dispatch: false }
  );

  loginFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginFailure),
        tap(({ payload }) => {
          this.sharedService.errorLog(payload.error);
          this.notificationService.showError('No se pudo iniciar sesión');
        })
      ),
    { dispatch: false }
  );

  // REGISTER
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.register),
      exhaustMap(({ credentials }) =>
        this.authService.register(credentials).pipe(
          map((user) => AuthActions.registerSuccess({ user })),
          catchError((error) =>
            of(AuthActions.registerFailure({ payload: error }))
          )
        )
      )
    )
  );

  registerSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.registerSuccess),
        tap(() => {
          this.notificationService.showSuccess('¡Cuenta creada exitosamente!');
          this.router.navigateByUrl('auth/login');
        })
      ),
    { dispatch: false }
  );

  registerFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.registerFailure),
        tap(({ payload }) => {
          this.sharedService.errorLog(payload.error);
          this.notificationService.showError('No se pudo crear la cuenta.');
        })
      ),
    { dispatch: false }
  );

  // LOGOUT
  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          localStorage.removeItem('access_token');
          this.notificationService.showInfo('Sesión finalizada');
          this.router.navigateByUrl('auth/login');
        })
      ),
    { dispatch: false }
  );
}
