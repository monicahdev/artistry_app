import { TestBed } from '@angular/core/testing';
import { Router, UrlTree } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { selectCurrentUser } from '../../User/selectors/user.selectors';
import { AdminGuard } from './admin.guard';

describe('AdminGuard (happy path)', () => {
  let guard: AdminGuard;
  let store: MockStore;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        AdminGuard,
        provideMockStore({
          initialState: {
            user: {
              user: null,
              loading: false,
              error: null,
            },
          },
        }),
      ],
    });

    store = TestBed.inject(MockStore);
    router = TestBed.inject(Router);
    store.overrideSelector(selectCurrentUser, null);
    store.refreshState();
    guard = TestBed.inject(AdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow access for ADMIN user', () => {
    store.overrideSelector(selectCurrentUser, { role: 'ADMIN' } as any);
    store.refreshState();
    const result = guard.canActivate();
    expect(result).toBeTrue();
  });
  it('should redirect non-admin user to /home', () => {
    store.overrideSelector(selectCurrentUser, { role: 'USER' } as any);
    store.refreshState();

    const result = guard.canActivate();

    expect(result instanceof UrlTree).toBeTrue();
    expect(router.serializeUrl(result as UrlTree)).toBe('/home');
  });

  it('should redirect when there is no user', () => {
    store.overrideSelector(selectCurrentUser, null);
    store.refreshState();

    const result = guard.canActivate();

    expect(result instanceof UrlTree).toBeTrue();
    expect(router.serializeUrl(result as UrlTree)).toBe('/home');
  });
});
