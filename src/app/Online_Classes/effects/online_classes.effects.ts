import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import * as OnlineClassesActions from '../actions/online_classes.actions';
import { OnlineClassesService } from '../services/online_classes.services';

@Injectable()
export class OnlineClassesEffects {
  constructor(
    private actions$: Actions,
    private onlineClassesService: OnlineClassesService
  ) {}

  loadOnlineClasses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OnlineClassesActions.loadOnlineClasses),
      exhaustMap(() =>
        this.onlineClassesService.getOnlineClasses().pipe(
          map((classes) =>
            OnlineClassesActions.loadOnlineClassesSuccess({ classes })
          ),
          catchError((error: HttpErrorResponse) =>
            of(OnlineClassesActions.loadOnlineClassesFailure({ error }))
          )
        )
      )
    )
  );

  loadOnlineClassDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OnlineClassesActions.loadOnlineClassDetail),
      exhaustMap(({ id }) =>
        this.onlineClassesService.getOnlineClassById(id).pipe(
          map((onlineClass) =>
            OnlineClassesActions.loadOnlineClassDetailSuccess({ onlineClass })
          ),
          catchError((error: HttpErrorResponse) =>
            of(OnlineClassesActions.loadOnlineClassDetailFailure({ error }))
          )
        )
      )
    )
  );
}
