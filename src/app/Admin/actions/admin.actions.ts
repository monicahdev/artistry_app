import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { MakeupServiceDTO } from '../../Makeup_Services/models/makeup_service.dto';
import { UserDTO } from '../../User/models/user.dto';
import { MakeupServiceCreateDTO } from '../services/admin.services';

export const loadAdminMakeupServices = createAction(
  '[Admin] Load MakeupServices'
);

export const loadAdminMakeupServicesSuccess = createAction(
  '[Admin] Load MakeupServices Success',
  props<{ makeup_services: MakeupServiceDTO[] }>()
);

export const loadAdminMakeupServicesFailure = createAction(
  '[Admin] Load MakeupServices Failure',
  props<{ error: HttpErrorResponse }>()
);

//crear servicio de maqullaje
export const createAdminMakeupService = createAction(
  '[Admin] Create Makeup Service',
  props<{ payload: MakeupServiceCreateDTO }>()
);

export const createAdminMakeupServiceSuccess = createAction(
  '[Admin] Create Makeup Service Success',
  props<{ makeup_service: MakeupServiceDTO }>()
);

export const createAdminMakeupServiceFailure = createAction(
  '[Admin] Create Makeup Service Failure',
  props<{ error: HttpErrorResponse }>()
);

// Eliminar servicio de maquillaje
export const deleteAdminMakeupService = createAction(
  '[Admin] Delete Makeup Service',
  props<{ id: number }>()
);

export const deleteAdminMakeupServiceSuccess = createAction(
  '[Admin] Delete Makeup Service Success',
  props<{ id: number }>()
);

export const deleteAdminMakeupServiceFailure = createAction(
  '[Admin] Delete Makeup Service Failure',
  props<{ error: HttpErrorResponse }>()
);

//actualizar un servicio de maquillaje
export const updateAdminMakeupService = createAction(
  '[Admin] Update Makeup Service',
  props<{ id: number; payload: MakeupServiceCreateDTO }>()
);

export const updateAdminMakeupServiceSuccess = createAction(
  '[Admin] Update Makeup Service Success',
  props<{ makeup_service: MakeupServiceDTO }>()
);

export const updateAdminMakeupServiceFailure = createAction(
  '[Admin] Update Makeup Service Failure',
  props<{ error: HttpErrorResponse }>()
);

//Listar usuarios
export const loadAllUsers = createAction('[Admin] Load All Users');

export const loadAllUsersSuccess = createAction(
  '[Admin] Load All Users Success',
  props<{ users: UserDTO[] }>()
);

export const loadAllUsersFailure = createAction(
  '[Admin] Load All Users Failure',
  props<{ error: any }>()
);
