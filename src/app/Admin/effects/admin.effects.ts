import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap, tap } from 'rxjs/operators';
import * as MakeupServicesActions from '../../Makeup_Services/actions/makeup_services.actions';
import { NotificationService } from '../../Shared/Services/notification.service';
import * as AdminActions from '../actions/admin.actions';
import { AdminService } from '../services/admin.services';
@Injectable()
export class AdminEffects {
  constructor(
    private actions$: Actions,
    private adminService: AdminService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

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
            // refresca lista pública
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
  updateMakeupService$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.updateAdminMakeupService),
      exhaustMap(({ id, payload }) =>
        this.adminService.updateMakeupService(id, payload).pipe(
          mergeMap((makeup_service) => [
            AdminActions.updateAdminMakeupServiceSuccess({ makeup_service }),
            MakeupServicesActions.loadMakeupServices(),
          ]),
          catchError((error) =>
            of(AdminActions.updateAdminMakeupServiceFailure({ error }))
          )
        )
      )
    )
  );
  updateMakeupServiceSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AdminActions.updateAdminMakeupServiceSuccess),
        tap(() => {
          this.notificationService.showSuccess(
            'Servicio actualizado correctamente'
          );
          this.router.navigate(['/admin/services']);
        })
      ),
    { dispatch: false }
  );

  updateMakeupServiceFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AdminActions.updateAdminMakeupServiceFailure),
        tap(({ error }) => {
          console.error('[Admin] updateMakeupService error', error);
          this.notificationService.showError(
            'No se pudo actualizar el servicio.'
          );
        })
      ),
    { dispatch: false }
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
