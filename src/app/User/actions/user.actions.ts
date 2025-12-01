import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { UserDTO } from '../models/user.dto';

export const loadMe = createAction('[User] Load Me');

export const loadMeSuccess = createAction(
  '[User] Load Me Success',
  props<{ user: UserDTO }>()
);

export const loadMeFailure = createAction(
  '[User] Load Me Failure',
  props<{ error: HttpErrorResponse }>()
);
