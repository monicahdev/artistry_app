import { Action, createReducer, on } from '@ngrx/store';
import { MakeupServiceDTO } from '../../Makeup_Services/models/makeup_service.dto';
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
  }))
);
export function adminReducer(
  state: AdminState | undefined,
  action: Action
): AdminState {
  return _adminReducer(state, action);
}
