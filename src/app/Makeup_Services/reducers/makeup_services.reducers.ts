import { Action, createReducer, on } from '@ngrx/store';
import * as MakeupServicesActions from '../actions/makeup_services.actions';
import { MakeupServiceDTO } from '../models/makeup_service.dto';

export interface MakeupServicesState {
  makeup_services: MakeupServiceDTO[];
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialState: MakeupServicesState = {
  makeup_services: [],
  loading: false,
  loaded: false,
  error: null,
};

const _makeupServicesReducer = createReducer(
  initialState,
  on(MakeupServicesActions.loadMakeupServices, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(
    MakeupServicesActions.loadMakeupServicesSuccess,
    (state, { makeup_services }) => ({
      ...state,
      makeup_services,
      loading: false,
      loaded: true,
      error: null,
    })
  ),
  on(MakeupServicesActions.loadMakeupServicesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error,
  }))
);

export function makeupServicesReducer(
  state: MakeupServicesState | undefined,
  action: Action
): MakeupServicesState {
  return _makeupServicesReducer(state, action);
}
