import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../app.reducers';
import { UserDTO } from '../../../User/models/user.dto';
import * as AdminActions from '../../actions/admin.actions';
import {
  selectAdminUsersLoading,
  selectAllUsers,
} from '../../selectors/admin.selectors';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent implements OnInit {
  users$: Observable<UserDTO[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.users$ = this.store.select(selectAllUsers);
    this.loading$ = this.store.select(selectAdminUsersLoading);
  }

  ngOnInit(): void {
    this.store.dispatch(AdminActions.loadAllUsers());
  }
}
