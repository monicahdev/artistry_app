import { Action, createReducer, on } from '@ngrx/store';
import {
  login,
  loginFailure,
  loginSuccess,
  logout,
  register,
  registerFailure,
  registerSuccess,
} from '../actions/auth.actions';
import { AuthDTO } from '../models/auth.dto';

export interface AuthState {
  credentials: AuthDTO;
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialState: AuthState = {
  credentials: new AuthDTO('', '', '', '', ''),
  loading: false,
  loaded: false,
  error: null,
};

const _authReducer = createReducer(
  initialState,

  // LOGIN
  on(login, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(loginSuccess, (state, action) => ({
    ...state,
    credentials: action.credentials,
    loading: false,
    loaded: true,
    error: null,
  })),
  on(loginFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
  })),

  // REGISTER
  on(register, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(registerSuccess, (state) => ({
    ...state,
    loading: false,
    loaded: true,
    error: null,
  })),
  on(registerFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
  })),

  // LOGOUT
  on(logout, () => initialState)
);

export function authReducer(
  state: AuthState | undefined,
  action: Action
): AuthState {
  return _authReducer(state, action);
}
