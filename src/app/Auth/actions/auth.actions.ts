import { createAction, props } from '@ngrx/store';
import { User } from '../models/auth.model';

export const login = createAction(
  '[Auth] Login',
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ token: string; user: User }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);
export const register = createAction(
  '[Auth] Register',
  props<{ email: string; password: string }>()
);

export const registerSuccess = createAction(
  '[Auth] Register Success',
  props<{ email: string }>()
);

export const registerFailure = createAction(
  '[Auth] Register Failure',
  props<{ error: string }>()
);
export const logout = createAction('[Auth] Logout');
