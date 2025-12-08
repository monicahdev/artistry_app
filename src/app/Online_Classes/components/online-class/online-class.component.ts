import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../app.reducers';
import * as OnlineClassesActions from '../../actions/online_classes.actions';
import { OnlineClassDTO } from '../../models/online_classes.dto';
import {
  selectOnlineClassesLoading,
  selectOnlineSelectedClass,
} from '../../selectors/online_classes.selectors';
@Component({
  selector: 'app-online-class',
  templateUrl: './online-class.component.html',
  styleUrls: ['./online-class.component.scss'],
})
export class OnlineClassComponent implements OnInit {
  onlineClass$: Observable<OnlineClassDTO | null>;
  loading$: Observable<boolean>;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {
    this.onlineClass$ = this.store.select(selectOnlineSelectedClass);
    this.loading$ = this.store.select(selectOnlineClassesLoading);
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = +idParam;
      this.store.dispatch(OnlineClassesActions.loadOnlineClassDetail({ id }));
    }
  }
}
