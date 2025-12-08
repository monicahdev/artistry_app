import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { OnlineClassDTO } from '../models/online_classes.dto';

@Injectable({
  providedIn: 'root',
})
export class OnlineClassesService {
  private readonly baseUrl = `${environment.apiUrl}/classes`;

  constructor(private http: HttpClient) {}

  getOnlineClasses(): Observable<OnlineClassDTO[]> {
    return this.http.get<OnlineClassDTO[]>(this.baseUrl);
  }

  getOnlineClassById(id: number): Observable<OnlineClassDTO> {
    return this.http.get<OnlineClassDTO>(`${this.baseUrl}/${id}`);
  }
}
