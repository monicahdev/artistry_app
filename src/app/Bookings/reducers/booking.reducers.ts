import { Action, createReducer, on } from '@ngrx/store';
import * as BookingsActions from '../actions/booking.actions';
import { BookingDTO } from '../models/booking.dto';

export interface BookingsState {
  bookings: BookingDTO[];
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialState: BookingsState = {
  bookings: [],
  loading: false,
  loaded: false,
  error: null,
};

const _bookingsReducer = createReducer(
  initialState,

  // Load bookings
  on(BookingsActions.loadMyBookings, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),

  on(BookingsActions.loadMyBookingsSuccess, (state, { bookings }) => ({
    ...state,
    bookings,
    loading: false,
    loaded: true,
    error: null,
  })),

  on(BookingsActions.loadMyBookingsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error,
  })),

  // crwate bookings
  on(BookingsActions.createBooking, (state) => ({
    ...state,
    loading: true,
  })),

  on(BookingsActions.createBookingSuccess, (state, { booking }) => ({
    ...state,
    bookings: [...state.bookings, booking],
    loading: false,
    loaded: true,
  })),

  on(BookingsActions.createBookingFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // delete bvooking
  on(BookingsActions.deleteBooking, (state) => ({
    ...state,
    loading: true,
  })),

  on(BookingsActions.deleteBookingSuccess, (state, { id }) => ({
    ...state,
    bookings: state.bookings.filter((b) => b.id !== id),
    loading: false,
    loaded: true,
  })),

  on(BookingsActions.deleteBookingFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // update booking
  on(BookingsActions.updateBooking, (state) => ({
    ...state,
    loading: true,
  })),

  on(BookingsActions.updateBookingSuccess, (state, { booking }) => ({
    ...state,
    bookings: state.bookings.map((b) => (b.id === booking.id ? booking : b)),
    loading: false,
    loaded: true,
    error: null,
  })),

  on(BookingsActions.updateBookingFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export function bookingsReducer(
  state: BookingsState | undefined,
  action: Action
): BookingsState {
  return _bookingsReducer(state, action);
}
