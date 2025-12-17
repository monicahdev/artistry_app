import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../app.reducers';
import * as AuthActions from '../../../Auth/actions/auth.actions';
import { selectIsAuthenticated } from '../../../Auth/selectors/auth.selectors';
import { UserDTO } from '../../../User/models/user.dto';
import { selectCurrentUser } from '../../../User/selectors/user.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isAuthenticated$: Observable<boolean>;
  currentUser$: Observable<UserDTO | null>;

  isMenuOpen = false;

  constructor(private store: Store<AppState>) {
    this.isAuthenticated$ = this.store.select(selectIsAuthenticated);
    this.currentUser$ = this.store.select(selectCurrentUser);
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  logout(): void {
    this.store.dispatch(AuthActions.logout());
    localStorage.removeItem('access_token');
    this.closeMenu();
  }
}
