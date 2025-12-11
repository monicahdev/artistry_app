import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AdminState } from '../reducers';
export const selectAdminState = createFeatureSelector<AdminState>('admin');

export const selectAdminServices = createSelector(
  selectAdminState,
  (state) => state.makeup_services
);

export const selectAdminLoading = createSelector(
  selectAdminState,
  (state) => state.loading
);

export const selectAdminError = createSelector(
  selectAdminState,
  (state) => state.error
);

export const selectAllUsers = createSelector(
  selectAdminState,
  (state) => state.users
);

export const selectAdminUsersLoading = createSelector(
  selectAdminState,
  (state) => state.loadingUsers
);

export const selectAdminUsersError = createSelector(
  selectAdminState,
  (state) => state.usersError
);
