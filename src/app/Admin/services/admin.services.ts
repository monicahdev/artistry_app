import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MakeupServiceDTO } from '../../Makeup_Services/models/makeup_service.dto';

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
}
