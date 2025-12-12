import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../app.reducers';
import { OnlineClassDTO } from '../../../Online_Classes/models/online_classes.dto';
import * as AdminActions from '../../actions/admin.actions';
import {
  selectAdminOnlineClasses,
  selectAdminOnlineClassesLoading,
  selectAllUsers,
} from '../../selectors/admin.selectors';

@Component({
  selector: 'app-online-classes-admin-list',
  templateUrl: './online-classes-admin-list.component.html',
  styleUrl: './online-classes-admin-list.component.scss',
})
export class OnlineClassesAdminListComponent implements OnInit {
  classes$: Observable<OnlineClassDTO[]>;
  loading$: Observable<boolean>;
  users$ = this.store.select(selectAllUsers);

  constructor(private store: Store<AppState>, private router: Router) {
    this.classes$ = this.store.select(selectAdminOnlineClasses);
    this.loading$ = this.store.select(selectAdminOnlineClassesLoading);
    this.users$ = this.store.select(selectAllUsers);
  }

  ngOnInit(): void {
    this.store.dispatch(AdminActions.loadAdminOnlineClasses());
    this.store.dispatch(AdminActions.loadAllUsers());
  }

  onNewClass(): void {
    this.router.navigate(['/admin/classes/form']);
  }

  onEditClass(onlineClass: OnlineClassDTO): void {
    this.router.navigate(['/admin/classes/form'], {
      queryParams: {
        id: onlineClass.id,
        name: onlineClass.name,
        description: onlineClass.description,
        url: onlineClass.url,
      },
    });
  }

  onDeleteClass(id: number): void {
    const confirmed = confirm('¿Quieres eliminar esta clase?');
    if (!confirmed) return;

    this.store.dispatch(AdminActions.deleteAdminOnlineClass({ id }));
  }

  onGrantAccess(classId: number, userIdInput: HTMLInputElement): void {
    const userId = Number(userIdInput.value);
    if (!userId) return;

    this.store.dispatch(
      AdminActions.grantOnlineClassAccess({ classId, userId })
    );
  }
}
