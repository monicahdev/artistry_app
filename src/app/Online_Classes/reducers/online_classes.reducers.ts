import { Action, createReducer, on } from '@ngrx/store';
import * as OnlineClassesActions from '../actions/online_classes.actions';
import { OnlineClassDTO } from '../models/online_classes.dto';

export interface OnlineClassesState {
  classes: OnlineClassDTO[];
  selectedClass: OnlineClassDTO | null;
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialState: OnlineClassesState = {
  classes: [],
  selectedClass: null,
  loading: false,
  loaded: false,
  error: null,
};

const _onlineClassesReducer = createReducer(
  initialState,

  // Load list of classes
  on(OnlineClassesActions.loadOnlineClasses, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),

  on(OnlineClassesActions.loadOnlineClassesSuccess, (state, { classes }) => ({
    ...state,
    classes,
    loading: false,
    loaded: true,
    error: null,
  })),

  on(OnlineClassesActions.loadOnlineClassesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error,
  })),
  on(OnlineClassesActions.loadOnlineClassDetail, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(
    OnlineClassesActions.loadOnlineClassDetailSuccess,
    (state, { onlineClass }) => ({
      ...state,
      selectedClass: onlineClass,
      loading: false,
      loaded: true,
      error: null,
    })
  ),

  on(OnlineClassesActions.loadOnlineClassDetailFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export function onlineClassesReducer(
  state: OnlineClassesState | undefined,
  action: Action
): OnlineClassesState {
  return _onlineClassesReducer(state, action);
}
