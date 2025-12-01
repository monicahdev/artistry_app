import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../app.reducers';
import * as UserActions from '../../User/actions/user.actions';
import { UserDTO } from '../../User/models/user.dto';
import {
  selectCurrentUser,
  selectUserLoading,
} from '../../User/selectors/user.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user$: Observable<UserDTO | null>;
  loading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.user$ = this.store.select(selectCurrentUser);
    this.loading$ = this.store.select(selectUserLoading);
  }

  ngOnInit(): void {
    const token = localStorage.getItem('access_token');

    if (!token) {
      return;
    }

    this.store.dispatch(UserActions.loadMe());
  }
}
