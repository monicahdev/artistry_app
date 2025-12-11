import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as BookingsActions from '../../actions/booking.actions';
import { BookingDTO } from '../../models/booking.dto';
import {
  selectAllBookings,
  selectBookingsLoading,
} from '../../selectors/booking.selectors';

@Component({
  selector: 'app-bookings-list',
  templateUrl: './bookings-list.component.html',
  styleUrls: ['./bookings-list.component.scss'],
})
export class BookingsListComponent implements OnInit {
  bookings$: Observable<BookingDTO[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store, private router: Router) {
    this.bookings$ = this.store.select(selectAllBookings);
    this.loading$ = this.store.select(selectBookingsLoading);
  }

  ngOnInit(): void {
    this.store.dispatch(BookingsActions.loadMyBookings());
  }

  onDeleteBooking(id: number): void {
    const confirmed = confirm('¿Quieres eliminar esta reserva?');
    if (!confirmed) return;

    this.store.dispatch(BookingsActions.deleteBooking({ id }));
  }

  onEditBooking(booking: BookingDTO): void {
    this.router.navigate(['/bookings/form'], {
      queryParams: {
        bookingId: booking.id,
        service_id: booking.service_id,
        date_hour: booking.date_hour,
        comments: booking.comments ?? '',
      },
    });
  }
}
