import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AuthInterceptor } from './auth-interceptor.service';

describe('AuthInterceptor (happy path)', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
      ],
    });

    http = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    localStorage.removeItem('access_token');
    httpMock.verify();
  });

  it('should attach Authorization header when token exists', () => {
    localStorage.setItem('access_token', 'TOKEN_123');

    http.get('/test-endpoint').subscribe();

    const req = httpMock.expectOne('/test-endpoint');
    expect(req.request.headers.get('Authorization')).toBe('Bearer TOKEN_123');

    req.flush({});
  });

  it('should NOT attach Authorization header when no token', () => {
    localStorage.removeItem('access_token');

    http.get('/test-endpoint-2').subscribe();

    const req = httpMock.expectOne('/test-endpoint-2');
    expect(req.request.headers.has('Authorization')).toBeFalse();

    req.flush({});
  });
});
