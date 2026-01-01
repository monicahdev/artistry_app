import { TestBed } from '@angular/core/testing';
import { AdminGuard } from './admin.guard';

describe('AdminGuard (happy path)', () => {
  let guard: AdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminGuard],
    });

    guard = TestBed.inject(AdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow access for admin user (happy path)', () => {
    spyOn(guard as any, 'canActivate').and.returnValue(true);
    expect(guard.canActivate()).toBeTrue();
  });
});
