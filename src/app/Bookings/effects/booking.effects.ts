import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap, tap } from 'rxjs/operators';
import { NotificationService } from '../../Shared/Services/notification.service';
import * as BookingsActions from '../actions/booking.actions';
import { BookingsService } from '../services/booking.services';

@Injectable()
export class BookingsEffects {
  constructor(
    private actions$: Actions,
    private bookingsService: BookingsService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  loadMyBookings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingsActions.loadMyBookings),
      exhaustMap(() =>
        this.bookingsService.getMyBookings().pipe(
          map((bookings) =>
            BookingsActions.loadMyBookingsSuccess({ bookings })
          ),
          catchError((error: HttpErrorResponse) =>
            of(BookingsActions.loadMyBookingsFailure({ error }))
          )
        )
      )
    )
  );

  createBooking$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingsActions.createBooking),
      exhaustMap(({ booking }) =>
        this.bookingsService.createBooking(booking).pipe(
          mergeMap((created) => [
            BookingsActions.createBookingSuccess({ booking: created }),
            BookingsActions.loadMyBookings(),
          ]),
          catchError((error: HttpErrorResponse) =>
            of(BookingsActions.createBookingFailure({ error }))
          )
        )
      )
    )
  );

  createBookingSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(BookingsActions.createBookingSuccess),
        tap(() => {
          this.notificationService.showSuccess('RESERVA CREADA CORRECTAMENTE');
          this.router.navigate(['/bookings/me']);
        })
      ),
    { dispatch: false }
  );

  createBookingFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(BookingsActions.createBookingFailure),
        tap(({ error }) => {
          console.error('[Bookings] createBooking error', error);
          this.notificationService.showError(
            'OOPS. INTENTA HACER DE NUEVO TU RESERVA.'
          );
        })
      ),
    { dispatch: false }
  );

  deleteBooking$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingsActions.deleteBooking),
      exhaustMap(({ id }) =>
        this.bookingsService.deleteBooking(id).pipe(
          mergeMap(() => [
            BookingsActions.deleteBookingSuccess({ id }),
            BookingsActions.loadMyBookings(),
          ]),
          catchError((error: HttpErrorResponse) =>
            of(BookingsActions.deleteBookingFailure({ error }))
          )
        )
      )
    )
  );
}
