import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { BookingCreateDTO, BookingDTO } from '../models/booking.dto';

// load bookings
export const loadMyBookings = createAction('[Bookings] Load My Bookings');

export const loadMyBookingsSuccess = createAction(
  '[Bookings] Load My Bookings Success',
  props<{ bookings: BookingDTO[] }>()
);

export const loadMyBookingsFailure = createAction(
  '[Bookings] Load My Bookings Failure',
  props<{ error: HttpErrorResponse }>()
);

// create new booking
export const createBooking = createAction(
  '[Bookings] Create Booking',
  props<{ booking: BookingCreateDTO }>()
);

export const createBookingSuccess = createAction(
  '[Bookings] Create Booking Success',
  props<{ booking: BookingDTO }>()
);

export const createBookingFailure = createAction(
  '[Bookings] Create Booking Failure',
  props<{ error: HttpErrorResponse }>()
);

// detele booking
export const deleteBooking = createAction(
  '[Bookings] Delete Booking',
  props<{ id: number }>()
);

export const deleteBookingSuccess = createAction(
  '[Bookings] Delete Booking Success',
  props<{ id: number }>()
);

export const deleteBookingFailure = createAction(
  '[Bookings] Delete Booking Failure',
  props<{ error: HttpErrorResponse }>()
);
