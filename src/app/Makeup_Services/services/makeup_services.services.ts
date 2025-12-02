import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { MakeupServiceDTO } from '../models/makeup_service.dto';

@Injectable({
  providedIn: 'root',
})
export class MakeupService {
  private readonly baseUrl = `${environment.apiUrl}/services`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<MakeupServiceDTO[]> {
    return this.http
      .get<any[]>(this.baseUrl)
      .pipe(
        map((services) =>
          services.map(
            (s) =>
              new MakeupServiceDTO(
                s.id,
                s.service_name,
                s.description,
                s.photo,
                s.price_from,
                s.duration,
                s.created_at
              )
          )
        )
      );
  }
}
