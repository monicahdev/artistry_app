/*import { CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  return true;
};*/ import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../app.reducers';
import { selectCurrentUser } from '../../User/selectors/user.selectors';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  private isAdmin: boolean = false;

  constructor(private router: Router, private store: Store<AppState>) {
    this.store.select(selectCurrentUser).subscribe((user) => {
      this.isAdmin = !!user && user.role === 'ADMIN';
    });
  }

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.isAdmin) {
      return true;
    }

    return this.router.parseUrl('/home');
  }
}
