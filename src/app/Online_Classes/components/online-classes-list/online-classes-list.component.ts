import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../app.reducers';
import * as OnlineClassesActions from '../../actions/online_classes.actions';
import { OnlineClassDTO } from '../../models/online_classes.dto';
import {
  selectAllOnlineClasses,
  selectOnlineClassesLoading,
} from '../../selectors/online_classes.selectors';

@Component({
  selector: 'app-online-classes-list',
  templateUrl: './online-classes-list.component.html',
  styleUrls: ['./online-classes-list.component.scss'],
})
export class OnlineClassesListComponent implements OnInit {
  classes$: Observable<OnlineClassDTO[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.classes$ = this.store.select(selectAllOnlineClasses);
    this.loading$ = this.store.select(selectOnlineClassesLoading);
  }

  ngOnInit(): void {
    this.store.dispatch(OnlineClassesActions.loadOnlineClasses());
  }
}
