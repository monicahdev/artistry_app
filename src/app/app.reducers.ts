import { ActionReducerMap } from '@ngrx/store';
import { adminReducer, AdminState } from './Admin/reducers';
import { authReducer, AuthState } from './Auth/reducers/auth.reducers';
import {
  makeupServicesReducer,
  MakeupServicesState,
} from './Makeup_Services/reducers/makeup_services.reducers';
import { userReducer, UserState } from './User/reducers/user.reducer';

export interface AppState {
  auth: AuthState;
  admin: AdminState;
  user: UserState;
  makeupServices: MakeupServicesState;
}

export const appReducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  admin: adminReducer,
  user: userReducer,
  makeupServices: makeupServicesReducer,
};
