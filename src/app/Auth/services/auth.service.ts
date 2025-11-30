import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  AuthDTO,
  LoginResponseDTO,
  RegisterResponseDTO,
} from '../models/auth.dto';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(credentials: AuthDTO): Observable<LoginResponseDTO> {
    const body = {
      email: credentials.email,
      password: credentials.password,
    };

    return this.http.post<LoginResponseDTO>(`${this.apiUrl}/auth/login`, body);
  }

  register(credentials: AuthDTO): Observable<RegisterResponseDTO> {
    const body = {
      email: credentials.email,
      password: credentials.password,
    };

    return this.http.post<RegisterResponseDTO>(
      `${this.apiUrl}/auth/register`,
      body
    );
  }
}
