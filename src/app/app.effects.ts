import { AdminEffects } from './Admin/effects/admin.effects';
import { AuthEffects } from './Auth/effects/auth.effects';
import { BookingsEffects } from './Bookings/effects/booking.effects';
import { MakeupServicesEffects } from './Makeup_Services/effects/makeup_services.effects';
import { OnlineClassesEffects } from './Online_Classes/effects/online_classes.effects';
import { UserEffects } from './User/effects/user.effects';
export const appEffects = [
  AuthEffects,
  UserEffects,
  MakeupServicesEffects,
  AdminEffects,
  BookingsEffects,
  OnlineClassesEffects,
];
