import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import * as MakeupServicesActions from '../actions/makeup_services.actions';
import { MakeupService } from '../services/makeup_services.services';
@Injectable()
export class MakeupServicesEffects {
  constructor(
    private actions$: Actions,
    private makeupServicesService: MakeupService
  ) {}

  loadMakeupServices$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MakeupServicesActions.loadMakeupServices),
      exhaustMap(() =>
        this.makeupServicesService.getAllMakeupServices().pipe(
          map((makeup_services) =>
            MakeupServicesActions.loadMakeupServicesSuccess({
              makeup_services,
            })
          ),
          catchError((error) =>
            of(MakeupServicesActions.loadMakeupServicesFailure({ error }))
          )
        )
      )
    )
  );

  loadMakeupServiceById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MakeupServicesActions.loadMakeupServiceById),
      exhaustMap(({ id }) =>
        this.makeupServicesService.getMakeupServiceById(id).pipe(
          map((service) =>
            MakeupServicesActions.loadMakeupServiceByIdSuccess({ service })
          ),
          catchError((error: HttpErrorResponse) =>
            of(MakeupServicesActions.loadMakeupServiceByIdFailure({ error }))
          )
        )
      )
    )
  );
}
