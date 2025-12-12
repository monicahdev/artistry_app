import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MakeupServiceDTO } from '../../Makeup_Services/models/makeup_service.dto';
import { OnlineClassDTO } from '../../Online_Classes/models/online_classes.dto';
import { UserDTO } from '../../User/models/user.dto';
export interface MakeupServiceCreateDTO {
  //makeup_service
  service_name: string;
  description: string;
  photo: string;
  price_from: number;
  duration: number;
}

export interface MakeupServiceUpdateDTO {
  service_name?: string;
  description?: string;
  photo?: string;
  price_from?: number;
  duration?: number;
}

export interface OnlineClassCreateDTO {
  name: string;
  description: string;
  url: string;
}

export interface OnlineClassUpdateDTO {
  name?: string;
  description?: string;
  url?: string;
}
@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private readonly baseUrl = `${environment.apiUrl}/admin/services`;
  private readonly baseUsersUrl = `${environment.apiUrl}/users`;
  private readonly baseClassesUrl = `${environment.apiUrl}/admin/classes`;

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

  updateMakeupService(
    id: number,
    payload: MakeupServiceCreateDTO
  ): Observable<MakeupServiceDTO> {
    return this.http.patch<MakeupServiceDTO>(`${this.baseUrl}/${id}`, payload);
  }

  getAllUsers(): Observable<UserDTO[]> {
    return this.http.get<UserDTO[]>(`${this.baseUsersUrl}/all-users`);
  }

  getAllOnlineClasses(): Observable<OnlineClassDTO[]> {
    return this.http.get<OnlineClassDTO[]>(this.baseClassesUrl);
  }

  createOnlineClass(payload: OnlineClassCreateDTO): Observable<OnlineClassDTO> {
    return this.http.post<OnlineClassDTO>(this.baseClassesUrl, payload);
  }

  updateOnlineClass(
    id: number,
    payload: OnlineClassUpdateDTO
  ): Observable<OnlineClassDTO> {
    return this.http.patch<OnlineClassDTO>(
      `${this.baseClassesUrl}/${id}`,
      payload
    );
  }

  deleteOnlineClass(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseClassesUrl}/${id}`);
  }

  grantOnlineClassAccess(classId: number, userId: number): Observable<void> {
    const url = `${this.baseClassesUrl}/${classId}/grant-access/${userId}`;
    return this.http.post<void>(url, {});
  }
}
