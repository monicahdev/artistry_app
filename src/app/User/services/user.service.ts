import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MeResponseDTO, UserDTO } from '../models/user.dto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly baseUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) {
    console.log('[UserService] environment.apiUrl =', environment.apiUrl);
    console.log('[UserService] baseUrl =', this.baseUrl);
  }

  getMe(): Observable<MeResponseDTO> {
    return this.http.get<any>(`${this.baseUrl}/me`).pipe(
      map((res) => {
        const user = new UserDTO(
          res.user.id,
          res.user.email,
          res.user.role,
          res.user.created_at,
          res.user.updated_at
        );

        return new MeResponseDTO(res.message, user);
      })
    );
  }
}
