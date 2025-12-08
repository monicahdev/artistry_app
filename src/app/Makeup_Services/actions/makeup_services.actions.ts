import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { MakeupServiceDTO } from '../models/makeup_service.dto';

//load all makeup services
export const loadMakeupServices = createAction(
  '[MakeupServices] Load MakeupServices'
);

export const loadMakeupServicesSuccess = createAction(
  '[MakeupServices] Load MakeupServices Success',
  props<{ makeup_services: MakeupServiceDTO[] }>()
);

export const loadMakeupServicesFailure = createAction(
  '[MakeupServices] Load MakeupServices Failure',
  props<{ error: HttpErrorResponse }>()
);
// load a makeup service by its id
export const loadMakeupServiceById = createAction(
  '[Makeup Services] Load MakeupService By Id',
  props<{ id: number }>()
);

export const loadMakeupServiceByIdSuccess = createAction(
  '[Makeup Services] Load MakeupService By Id Success',
  props<{ service: MakeupServiceDTO }>()
);

export const loadMakeupServiceByIdFailure = createAction(
  '[Makeup Services] Load MakeupService By Id Failure',
  props<{ error: HttpErrorResponse }>()
);
