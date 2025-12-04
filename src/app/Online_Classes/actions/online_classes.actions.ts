import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { OnlineClassDTO } from '../models/online_classes.dto';

export const loadOnlineClasses = createAction('[Classes] Load OnlineClasses');

export const loadOnlineClassesSuccess = createAction(
  '[Classes] Load OnlineClasses Success',
  props<{ classes: OnlineClassDTO[] }>()
);

export const loadOnlineClassesFailure = createAction(
  '[Classes] Load OnlineClasses Failure',
  props<{ error: HttpErrorResponse }>()
);
