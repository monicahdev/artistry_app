import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { AuthDTO, RegisterResponseDTO } from '../models/auth.dto';

// LOGIN
export const login = createAction(
  '[Login Page] Login',
  props<{ credentials: AuthDTO }>()
);

export const loginSuccess = createAction(
  '[Login Page] Login Success',
  props<{ credentials: AuthDTO }>()
);

export const loginFailure = createAction(
  '[Login Page] Login Failure',
  props<{ payload: HttpErrorResponse }>()
);

// REGISTER
export const register = createAction(
  '[Register Page] Register',
  props<{ credentials: AuthDTO }>()
);

export const registerSuccess = createAction(
  '[Register Page] Register Success',
  props<{ user: RegisterResponseDTO }>()
);

export const registerFailure = createAction(
  '[Register Page] Register Failure',
  props<{ payload: HttpErrorResponse }>()
);

// LOGOUT
export const logout = createAction('[Login Page] Logout');
