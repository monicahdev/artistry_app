import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { MakeupServiceDTO } from '../models/makeup_service.dto';

export const loadMakeupServices = createAction(
  '[MakeupServices] Load MakeupServices'
);

export const loadMakeupServicesSuccess = createAction(
  '[MakeupServices] Load MakeupServices Success',
  props<{ services: MakeupServiceDTO[] }>()
);

export const loadMakeupServicesFailure = createAction(
  '[MakeupServices] Load MakeupServices Failure',
  props<{ error: HttpErrorResponse }>()
);
