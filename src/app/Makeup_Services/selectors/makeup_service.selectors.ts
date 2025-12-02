import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MakeupServicesState } from '../reducers/makeup_services.reducers';

export const selectMakeupServicesState =
  createFeatureSelector<MakeupServicesState>('makeupServices');

export const selectAllMakeupServices = createSelector(
  selectMakeupServicesState,
  (state) => state.makeup_services
);

export const selectMakeupServicesLoading = createSelector(
  selectMakeupServicesState,
  (state) => state.loading
);

export const selectMakeupServicesError = createSelector(
  selectMakeupServicesState,
  (state) => state.error
);
