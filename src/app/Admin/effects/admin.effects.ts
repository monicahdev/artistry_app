import { HttpErrorResponse } from '@angular/common/http';
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

  createMakeupServiceSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AdminActions.createAdminMakeupServiceSuccess),
        tap(() => {
          this.notificationService.showSuccess('Servicio creado correctamente');
          this.router.navigate(['/admin/services']);
        })
      ),
    { dispatch: false }
  );

  createMakeupServiceFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AdminActions.createAdminMakeupServiceFailure),
        tap(({ error }) => {
          console.error('[Admin] createMakeupService error', error);
          this.notificationService.showError('No se pudo crear el servicio.');
        })
      ),
    { dispatch: false }
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

  deleteMakeupServiceSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AdminActions.deleteAdminMakeupServiceSuccess),
        tap(() => {
          this.notificationService.showSuccess(
            'Servicio eliminado correctamente'
          );
        })
      ),
    { dispatch: false }
  );

  deleteMakeupServiceFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AdminActions.deleteAdminMakeupServiceFailure),
        tap(({ error }) => {
          console.error('[Admin] deleteMakeupService error', error);
          this.notificationService.showError(
            'No se pudo eliminar el servicio.'
          );
        })
      ),
    { dispatch: false }
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

  loadAdminOnlineClasses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.loadAdminOnlineClasses),
      exhaustMap(() =>
        this.adminService.getAllOnlineClasses().pipe(
          map((classes) =>
            AdminActions.loadAdminOnlineClassesSuccess({ classes })
          ),
          catchError((error: HttpErrorResponse) =>
            of(AdminActions.loadAdminOnlineClassesFailure({ error }))
          )
        )
      )
    )
  );

  //crear clase
  createAdminOnlineClass$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.createAdminOnlineClass),
      exhaustMap(({ payload }) =>
        this.adminService.createOnlineClass(payload).pipe(
          map((online_class) =>
            AdminActions.createAdminOnlineClassSuccess({ online_class })
          ),
          catchError((error: HttpErrorResponse) =>
            of(AdminActions.createAdminOnlineClassFailure({ error }))
          )
        )
      )
    )
  );

  createAdminOnlineClassSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AdminActions.createAdminOnlineClassSuccess),
        tap(() => {
          this.notificationService.showSuccess('Clase creada correctamente');
          this.router.navigate(['/admin/classes']);
        })
      ),
    { dispatch: false }
  );

  createAdminOnlineClassFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AdminActions.createAdminOnlineClassFailure),
        tap(({ error }) => {
          console.error('[Admin] createAdminOnlineClass error', error);
          this.notificationService.showError('No se pudo crear la clase.');
        })
      ),
    { dispatch: false }
  );

  //actualizar clase
  updateAdminOnlineClass$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.updateAdminOnlineClass),
      exhaustMap(({ id, payload }) =>
        this.adminService.updateOnlineClass(id, payload).pipe(
          map((online_class) =>
            AdminActions.updateAdminOnlineClassSuccess({ online_class })
          ),
          catchError((error: HttpErrorResponse) =>
            of(AdminActions.updateAdminOnlineClassFailure({ error }))
          )
        )
      )
    )
  );

  updateAdminOnlineClassSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AdminActions.updateAdminOnlineClassSuccess),
        tap(() => {
          this.notificationService.showSuccess('Clase actualizada');
          this.router.navigate(['/admin/classes']);
        })
      ),
    { dispatch: false }
  );

  updateAdminOnlineClassFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AdminActions.updateAdminOnlineClassFailure),
        tap(({ error }) => {
          console.error('[Admin] updateAdminOnlineClass error', error);
          this.notificationService.showError('No se pudo actualizar la clase.');
        })
      ),
    { dispatch: false }
  );

  //eliminar clase
  deleteAdminOnlineClass$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.deleteAdminOnlineClass),
      exhaustMap(({ id }) =>
        this.adminService.deleteOnlineClass(id).pipe(
          map(() => AdminActions.deleteAdminOnlineClassSuccess({ id })),
          catchError((error: HttpErrorResponse) =>
            of(AdminActions.deleteAdminOnlineClassFailure({ error }))
          )
        )
      )
    )
  );

  deleteAdminOnlineClassSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AdminActions.deleteAdminOnlineClassSuccess),
        tap(() => {
          this.notificationService.showSuccess('Clase eliminada correctamente');
        })
      ),
    { dispatch: false }
  );

  deleteAdminOnlineClassFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AdminActions.deleteAdminOnlineClassFailure),
        tap(({ error }) => {
          console.error('[Admin] deleteAdminOnlineClass error', error);
          this.notificationService.showError('No se pudo eliminar la clase.');
        })
      ),
    { dispatch: false }
  );

  //dar acceso a clase a un usuario
  grantOnlineClassAccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.grantOnlineClassAccess),
      exhaustMap(({ classId, userId }) =>
        this.adminService.grantOnlineClassAccess(classId, userId).pipe(
          map(() => AdminActions.grantOnlineClassAccessSuccess()),
          catchError((error: HttpErrorResponse) =>
            of(AdminActions.grantOnlineClassAccessFailure({ error }))
          )
        )
      )
    )
  );

  grantOnlineClassAccessSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AdminActions.grantOnlineClassAccessSuccess),
        tap(() => {
          this.notificationService.showSuccess(
            'Acceso a la clase concedido correctamente'
          );
        })
      ),
    { dispatch: false }
  );

  grantOnlineClassAccessFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AdminActions.grantOnlineClassAccessFailure),
        tap(({ error }) => {
          console.error('[Admin] grantOnlineClassAccess error', error);
          this.notificationService.showError(
            'No se pudo conceder acceso a la clase.'
          );
        })
      ),
    { dispatch: false }
  );
}
