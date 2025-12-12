import { Action, createReducer, on } from '@ngrx/store';
import { MakeupServiceDTO } from '../../Makeup_Services/models/makeup_service.dto';
import { OnlineClassDTO } from '../../Online_Classes/models/online_classes.dto';
import { UserDTO } from '../../User/models/user.dto';
import * as AdminActions from '../actions/admin.actions';
export interface AdminState {
  users: UserDTO[];
  loadingUsers: boolean;
  usersLoaded: boolean;
  usersError: any;

  makeup_services: MakeupServiceDTO[];
  loading: boolean;
  loaded: boolean;
  error: any;

  online_classes: OnlineClassDTO[];
  loadingClasses: boolean;
  classesLoaded: boolean;
  classesError: any;
  grantingAccess: boolean;
  grantAccessError: any;
}

export const initialState: AdminState = {
  users: [],
  loadingUsers: false,
  usersLoaded: false,
  usersError: null,

  makeup_services: [],
  loading: false,
  loaded: false,
  error: null,

  online_classes: [],
  loadingClasses: false,
  classesLoaded: false,
  classesError: null,
  grantingAccess: false,
  grantAccessError: null,
};

const _adminReducer = createReducer(
  initialState,

  // Cargar servicios maquillaje
  on(AdminActions.loadAdminMakeupServices, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(
    AdminActions.loadAdminMakeupServicesSuccess,
    (state, { makeup_services }) => ({
      ...state,
      makeup_services,
      loading: false,
      loaded: true,
      error: null,
    })
  ),
  on(AdminActions.loadAdminMakeupServicesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error,
  })),

  // Crear servicio de maquillaje
  on(AdminActions.createAdminMakeupService, (state) => ({
    ...state,
    loading: true,
  })),
  on(
    AdminActions.createAdminMakeupServiceSuccess,
    (state, { makeup_service }) => ({
      ...state,
      makeup_services: [...state.makeup_services, makeup_service],
      loading: false,
      loaded: true,
    })
  ),
  on(AdminActions.createAdminMakeupServiceFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Emilinar servicio maquillaje
  on(AdminActions.deleteAdminMakeupService, (state) => ({
    ...state,
    loading: true,
  })),
  on(AdminActions.deleteAdminMakeupServiceSuccess, (state, { id }) => ({
    ...state,
    makeup_services: state.makeup_services.filter((s) => s.id !== id),
    loading: false,
    loaded: true,
  })),
  on(AdminActions.deleteAdminMakeupServiceFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // modificar servicio de maquillaje
  on(AdminActions.updateAdminMakeupService, (state) => ({
    ...state,
    loading: true,
  })),

  on(
    AdminActions.updateAdminMakeupServiceSuccess,
    (state, { makeup_service }) => ({
      ...state,
      makeup_services: state.makeup_services.map((s) =>
        s.id === makeup_service.id ? makeup_service : s
      ),
      loading: false,
      loaded: true,
      error: null,
    })
  ),

  on(AdminActions.updateAdminMakeupServiceFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  //lista de usuarios
  on(AdminActions.loadAllUsers, (state) => ({
    ...state,
    loadingUsers: true,
    usersError: null,
  })),

  on(AdminActions.loadAllUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loadingUsers: false,
    usersLoaded: true,
    usersError: null,
  })),

  on(AdminActions.loadAllUsersFailure, (state, { error }) => ({
    ...state,
    loadingUsers: false,
    usersError: error,
  })),

  // cargar todas las clases
  on(AdminActions.loadAdminOnlineClasses, (state) => ({
    ...state,
    loadingClasses: true,
    classesLoaded: false,
    classesError: null,
  })),
  on(AdminActions.loadAdminOnlineClassesSuccess, (state, { classes }) => ({
    ...state,
    online_classes: classes,
    loadingClasses: false,
    classesLoaded: true,
    classesError: null,
  })),
  on(AdminActions.loadAdminOnlineClassesFailure, (state, { error }) => ({
    ...state,
    loadingClasses: false,
    classesLoaded: false,
    classesError: error,
  })),

  //crear clase
  on(AdminActions.createAdminOnlineClass, (state) => ({
    ...state,
    loadingClasses: true,
  })),
  on(AdminActions.createAdminOnlineClassSuccess, (state, { online_class }) => ({
    ...state,
    online_classes: [...state.online_classes, online_class],
    loadingClasses: false,
    classesLoaded: true,
  })),
  on(AdminActions.createAdminOnlineClassFailure, (state, { error }) => ({
    ...state,
    loadingClasses: false,
    classesError: error,
  })),

  //actualizar clase
  on(AdminActions.updateAdminOnlineClass, (state) => ({
    ...state,
    loadingClasses: true,
  })),
  on(AdminActions.updateAdminOnlineClassSuccess, (state, { online_class }) => ({
    ...state,
    online_classes: state.online_classes.map((c) =>
      c.id === online_class.id ? online_class : c
    ),
    loadingClasses: false,
    classesLoaded: true,
    classesError: null,
  })),
  on(AdminActions.updateAdminOnlineClassFailure, (state, { error }) => ({
    ...state,
    loadingClasses: false,
    classesError: error,
  })),

  //eliminar clase
  on(AdminActions.deleteAdminOnlineClass, (state) => ({
    ...state,
    loadingClasses: true,
  })),
  on(AdminActions.deleteAdminOnlineClassSuccess, (state, { id }) => ({
    ...state,
    online_classes: state.online_classes.filter((c) => c.id !== id),
    loadingClasses: false,
    classesLoaded: true,
  })),
  on(AdminActions.deleteAdminOnlineClassFailure, (state, { error }) => ({
    ...state,
    loadingClasses: false,
    classesError: error,
  })),

  //dar acceso a clase a un usuario
  on(AdminActions.grantOnlineClassAccess, (state) => ({
    ...state,
    loadingClasses: true,
    classesError: null,
  })),
  on(AdminActions.grantOnlineClassAccessSuccess, (state) => ({
    ...state,
    loadingClasses: false,
  })),
  on(AdminActions.grantOnlineClassAccessFailure, (state, { error }) => ({
    ...state,
    loadingClasses: false,
    classesError: error,
  }))
);
export function adminReducer(
  state: AdminState | undefined,
  action: Action
): AdminState {
  return _adminReducer(state, action);
}
