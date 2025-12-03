import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';

import * as BookingsActions from '../actions/booking.actions';
import { BookingsService } from '../services/booking.services';

@Injectable()
export class BookingsEffects {
  constructor(
    private actions$: Actions,
    private bookingsService: BookingsService
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
