import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OnlineClassesState } from '../reducers/online_classes.reducers';

export const selectOnlineClassesState =
  createFeatureSelector<OnlineClassesState>('online_classes');

export const selectAllOnlineClasses = createSelector(
  selectOnlineClassesState,
  (state) => state.classes
);

export const selectOnlineClassesLoading = createSelector(
  selectOnlineClassesState,
  (state) => state.loading
);

export const selectOnlineClassesError = createSelector(
  selectOnlineClassesState,
  (state) => state.error
);

export const selectOnlineSelectedClass = createSelector(
  selectOnlineClassesState,
  (state) => state.selectedClass
);
