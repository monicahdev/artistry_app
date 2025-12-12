import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { MakeupServiceDTO } from '../../Makeup_Services/models/makeup_service.dto';
import {
  OnlineClassCreateDTO,
  OnlineClassDTO,
  OnlineClassUpdateDTO,
} from '../../Online_Classes/models/online_classes.dto';
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

//listar clases
export const loadAdminOnlineClasses = createAction(
  '[Admin] Load Online Classes'
);

export const loadAdminOnlineClassesSuccess = createAction(
  '[Admin] Load Online Classes Success',
  props<{ classes: OnlineClassDTO[] }>()
);

export const loadAdminOnlineClassesFailure = createAction(
  '[Admin] Load Online Classes Failure',
  props<{ error: HttpErrorResponse }>()
);

//crfear clase en línea
export const createAdminOnlineClass = createAction(
  '[Admin] Create Online Class',
  props<{ payload: OnlineClassCreateDTO }>()
);

export const createAdminOnlineClassSuccess = createAction(
  '[Admin] Create Online Class Success',
  props<{ online_class: OnlineClassDTO }>()
);

export const createAdminOnlineClassFailure = createAction(
  '[Admin] Create Online Class Failure',
  props<{ error: HttpErrorResponse }>()
);

//actualizar clase en línea
export const updateAdminOnlineClass = createAction(
  '[Admin] Update Online Class',
  props<{ id: number; payload: OnlineClassUpdateDTO }>()
);

export const updateAdminOnlineClassSuccess = createAction(
  '[Admin] Update Online Class Success',
  props<{ online_class: OnlineClassDTO }>()
);

export const updateAdminOnlineClassFailure = createAction(
  '[Admin] Update Online Class Failure',
  props<{ error: HttpErrorResponse }>()
);

//eliminar claser
export const deleteAdminOnlineClass = createAction(
  '[Admin] Delete Online Class',
  props<{ id: number }>()
);

export const deleteAdminOnlineClassSuccess = createAction(
  '[Admin] Delete Online Class Success',
  props<{ id: number }>()
);

export const deleteAdminOnlineClassFailure = createAction(
  '[Admin] Delete Online Class Failure',
  props<{ error: HttpErrorResponse }>()
);

//dar acceso a clase a un usuario
export const grantOnlineClassAccess = createAction(
  '[Admin] Grant Online Class Access',
  props<{ classId: number; userId: number }>()
);

export const grantOnlineClassAccessSuccess = createAction(
  '[Admin] Grant Online Class Access Success'
);

export const grantOnlineClassAccessFailure = createAction(
  '[Admin] Grant Online Class Access Failure',
  props<{ error: HttpErrorResponse }>()
);
