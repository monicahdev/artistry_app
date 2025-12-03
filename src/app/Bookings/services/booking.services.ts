import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { BookingCreateDTO, BookingDTO } from '../models/booking.dto';

@Injectable({
  providedIn: 'root',
})
export class BookingsService {
  private readonly baseUrl = `${environment.apiUrl}/bookings`;

  constructor(private http: HttpClient) {}

  getMyBookings(): Observable<BookingDTO[]> {
    return this.http.get<BookingDTO[]>(`${this.baseUrl}/me`);
  }

  createBooking(payload: BookingCreateDTO): Observable<BookingDTO> {
    return this.http.post<BookingDTO>(this.baseUrl, payload);
  }

  deleteBooking(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
