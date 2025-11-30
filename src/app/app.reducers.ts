import { ActionReducerMap } from '@ngrx/store';
import { authReducer, AuthState } from './Auth/reducers/auth.reducers';

export interface AppState {
  auth: AuthState;
}

export const appReducers: ActionReducerMap<AppState> = {
  auth: authReducer,
};
