import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { OnlineClassDTO } from '../models/online_classes.dto';

//al classes
export const loadOnlineClasses = createAction('[Classes] Load OnlineClasses');

export const loadOnlineClassesSuccess = createAction(
  '[Classes] Load OnlineClasses Success',
  props<{ classes: OnlineClassDTO[] }>()
);

export const loadOnlineClassesFailure = createAction(
  '[Classes] Load OnlineClasses Failure',
  props<{ error: HttpErrorResponse }>()
);

//class detail
export const loadOnlineClassDetail = createAction(
  '[Classes] Load OnlineClass Detail',
  props<{ id: number }>()
);

export const loadOnlineClassDetailSuccess = createAction(
  '[Classes] Load OnlineClass Detail Success',
  props<{ onlineClass: OnlineClassDTO }>()
);

export const loadOnlineClassDetailFailure = createAction(
  '[Classes] Load OnlineClass Detail Failure',
  props<{ error: HttpErrorResponse }>()
);
