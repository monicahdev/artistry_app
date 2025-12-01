import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import { UserDTO } from '../models/user.dto';

export interface UserState {
  user: UserDTO | null;
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialState: UserState = {
  user: null,
  loading: false,
  loaded: false,
  error: null,
};

const _userReducer = createReducer(
  initialState,
  on(UserActions.loadMe, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(UserActions.loadMeSuccess, (state, { user }) => ({
    ...state,
    user,
    loading: false,
    loaded: true,
    error: null,
  })),
  on(UserActions.loadMeFailure, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error,
  }))
);

export function userReducer(
  state: UserState | undefined,
  action: Action
): UserState {
  return _userReducer(state, action);
}
