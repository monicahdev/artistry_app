import { AdminEffects } from './Admin/effects/admin.effects';
import { AuthEffects } from './Auth/effects/auth.effects';
import { MakeupServicesEffects } from './Makeup_Services/effects/makeup_services.effects';
import { UserEffects } from './User/effects/user.effects';
export const appEffects = [
  AuthEffects,
  UserEffects,
  MakeupServicesEffects,
  AdminEffects,
];
