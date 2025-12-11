import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';
import * as MakeupServicesActions from '../../Makeup_Services/actions/makeup_services.actions';
import * as AdminActions from '../actions/admin.actions';
import { AdminService } from '../services/admin.services';

@Injectable()
export class AdminEffects {
  constructor(private actions$: Actions, private adminService: AdminService) {}

  loadMakeupServices$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.loadAdminMakeupServices),
      exhaustMap(() =>
        this.adminService.getAllMakeupServices().pipe(
          map((makeup_services) =>
            AdminActions.loadAdminMakeupServicesSuccess({ makeup_services })
          ),
          catchError((error) =>
            of(AdminActions.loadAdminMakeupServicesFailure({ error }))
          )
        )
      )
    )
  );

  createMakeupService$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.createAdminMakeupService),
      exhaustMap(({ payload }) =>
        this.adminService.createMakeupService(payload).pipe(
          mergeMap((makeup_service) => [
            AdminActions.createAdminMakeupServiceSuccess({ makeup_service }),
            MakeupServicesActions.loadMakeupServices(),
          ]),
          catchError((error) =>
            of(AdminActions.createAdminMakeupServiceFailure({ error }))
          )
        )
      )
    )
  );

  deleteMakeupService$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.deleteAdminMakeupService),
      exhaustMap(({ id }) =>
        this.adminService.deleteMakeupService(id).pipe(
          mergeMap(() => [
            AdminActions.deleteAdminMakeupServiceSuccess({ id }),
            MakeupServicesActions.loadMakeupServices(),
          ]),

          catchError((error) =>
            of(AdminActions.deleteAdminMakeupServiceFailure({ error }))
          )
        )
      )
    )
  );

  loadAllUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.loadAllUsers),
      exhaustMap(() =>
        this.adminService.getAllUsers().pipe(
          map((users) => AdminActions.loadAllUsersSuccess({ users })),
          catchError((error) => of(AdminActions.loadAllUsersFailure({ error })))
        )
      )
    )
  );
}
