import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import * as MakeupServicessActions from '../actions/makeup_services.actions';
import { MakeupService } from '../services/makeup_services.services';

@Injectable()
export class MakeupServicesEffects {
  constructor(
    private actions$: Actions,
    private servicesService: MakeupService
  ) {}

  loadServices$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MakeupServicessActions.loadMakeupServices),
      exhaustMap(() =>
        this.servicesService.getAll().pipe(
          map((services) =>
            MakeupServicessActions.loadMakeupServicesSuccess({ services })
          ),
          catchError((error) =>
            of(MakeupServicessActions.loadMakeupServicesFailure({ error }))
          )
        )
      )
    )
  );
}
