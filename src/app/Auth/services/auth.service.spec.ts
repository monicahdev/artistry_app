import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '../../../environments/environment';
import { AuthDTO } from '../models/auth.dto';
import { AuthService } from './auth.service';

describe('AuthService, happy path', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService],
    });

    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('login() should POST /auth/login and return token', () => {
    const credentials = {
      email: 'test@test.com',
      password: 'password123',
    } as unknown as AuthDTO;

    const mockResponse = {
      access_token: 'TOKEN_ABC',
      token_type: 'bearer',
    };

    service.login(credentials).subscribe((res) => {
      expect(res.access_token).toBe('TOKEN_ABC');
      expect(res.token_type).toBe('bearer');
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/auth/login`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({
      email: 'test@test.com',
      password: 'password123',
    });

    req.flush(mockResponse);
  });

  it('register() should POST /auth/register and return user', () => {
    const credentials = {
      email: 'new@user.com',
      password: 'password123',
    } as unknown as AuthDTO;

    const mockResponse = {
      id: 1,
      email: 'new@user.com',
      role: 'USER',
      created_at: '2025-01-01T00:00:00Z',
      updated_at: '2025-01-01T00:00:00Z',
    };

    service.register(credentials).subscribe((res) => {
      expect(res.email).toBe('new@user.com');
      expect(res.role).toBe('USER');
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/auth/register`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({
      email: 'new@user.com',
      password: 'password123',
    });

    req.flush(mockResponse);
  });
});
