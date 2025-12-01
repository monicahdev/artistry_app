import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../app.reducers';
import { UserDTO } from '../../models/user.dto';
import { selectCurrentUser } from '../../selectors/user.selectors';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  user$: Observable<UserDTO | null>;

  constructor(private store: Store<AppState>) {
    this.user$ = this.store.select(selectCurrentUser);
  }
}
