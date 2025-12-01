import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '../reducers';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAuthLoading = createSelector(
  selectAuthState,
  (state) => state.loading
);

export const selectAuthError = createSelector(
  selectAuthState,
  (state) => state.error
);

export const selectAuthCredentials = createSelector(
  selectAuthState,
  (state) => state.credentials
);

export const selectIsAuthenticated = createSelector(
  selectAuthCredentials,
  (credentials) => !!credentials?.access_token
);
