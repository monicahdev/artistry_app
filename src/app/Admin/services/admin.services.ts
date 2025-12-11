import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MakeupServiceDTO } from '../../Makeup_Services/models/makeup_service.dto';
import { UserDTO } from '../../User/models/user.dto';
export interface MakeupServiceCreateDTO {
  //makeup_service
  service_name: string;
  description: string;
  photo: string;
  price_from: number;
  duration: number;
}

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private readonly baseUrl = `${environment.apiUrl}/admin/services`;
  private readonly baseUsersUrl = `${environment.apiUrl}/users`;
  constructor(private http: HttpClient) {}

  getAllMakeupServices(): Observable<MakeupServiceDTO[]> {
    return this.http.get<MakeupServiceDTO[]>(this.baseUrl);
  }

  createMakeupService(
    payload: MakeupServiceCreateDTO
  ): Observable<MakeupServiceDTO> {
    return this.http.post<MakeupServiceDTO>(this.baseUrl, payload);
  }

  deleteMakeupService(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getAllUsers(): Observable<UserDTO[]> {
    return this.http.get<UserDTO[]>(`${this.baseUsersUrl}/all-users`);
  }
}
