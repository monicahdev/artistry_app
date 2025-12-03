import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookingsState } from '../reducers';

export const selectBookingsState =
  createFeatureSelector<BookingsState>('bookings');

export const selectAllBookings = createSelector(
  selectBookingsState,
  (state) => state.bookings
);

export const selectBookingsLoading = createSelector(
  selectBookingsState,
  (state) => state.loading
);

export const selectBookingsError = createSelector(
  selectBookingsState,
  (state) => state.error
);
