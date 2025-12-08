import { ActionReducerMap } from '@ngrx/store';
import { adminReducer, AdminState } from './Admin/reducers';
import { authReducer, AuthState } from './Auth/reducers/auth.reducers';
import { bookingsReducer, BookingsState } from './Bookings/reducers';
import {
  makeupServicesReducer,
  MakeupServicesState,
} from './Makeup_Services/reducers/makeup_services.reducers';
import {
  onlineClassesReducer,
  OnlineClassesState,
} from './Online_Classes/reducers/online_classes.reducers';
import { userReducer, UserState } from './User/reducers/user.reducer';

export interface AppState {
  auth: AuthState;
  admin: AdminState;
  user: UserState;
  makeupServices: MakeupServicesState;
  bookings: BookingsState;
  onlineClasses: OnlineClassesState;
}

export const appReducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  admin: adminReducer,
  user: userReducer,
  makeupServices: makeupServicesReducer,
  bookings: bookingsReducer,
  onlineClasses: onlineClassesReducer,
};
