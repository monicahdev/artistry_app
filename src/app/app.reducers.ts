import { ActionReducerMap } from '@ngrx/store';
import { authReducer, AuthState } from './Auth/reducers/auth.reducers';
import { userReducer, UserState } from './User/reducers/user.reducer';

export interface AppState {
  auth: AuthState;
  user: UserState;
}

export const appReducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  user: userReducer,
};
