import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../app.reducers';

import * as MakeupServicesActions from '../../../Makeup_Services/actions/makeup_services.actions';
import { MakeupServiceDTO } from '../../../Makeup_Services/models/makeup_service.dto';
import { selectAllMakeupServices } from '../../../Makeup_Services/selectors/makeup_service.selectors';

import * as BookingsActions from '../../actions/booking.actions';
import { BookingCreateDTO } from '../../models/booking.dto';

@Component({
  selector: 'app-bookings-form',
  templateUrl: './bookings-form.component.html',
  styleUrls: ['./bookings-form.component.scss'],
})
export class BookingsFormComponent implements OnInit {
  bookingForm: FormGroup;

  service_id = new FormControl<number | null>(null, Validators.required);
  date_hour = new FormControl<string | null>(null, Validators.required);
  comments = new FormControl<string | null>('');

  services$: Observable<MakeupServiceDTO[]>;

  bookingId: number | null = null;
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.bookingForm = this.fb.group({
      service_id: this.service_id,
      date_hour: this.date_hour,
      comments: this.comments,
    });

    this.services$ = this.store.select(selectAllMakeupServices);
    this.store.dispatch(MakeupServicesActions.loadMakeupServices());
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const bookingIdParam = params.get('bookingId');
      const serviceIdParam = params.get('service_id');
      const dateHourParam = params.get('date_hour');
      const commentsParam = params.get('comments');

      if (bookingIdParam) {
        this.bookingId = +bookingIdParam;
        this.isEditMode = true;
      }

      if (serviceIdParam) this.service_id.setValue(+serviceIdParam);
      if (dateHourParam) this.date_hour.setValue(dateHourParam);
      if (commentsParam) this.comments.setValue(commentsParam);
    });
  }

  onSubmit(): void {
    if (this.bookingForm.invalid) {
      this.bookingForm.markAllAsTouched();
      return;
    }

    const payload: BookingCreateDTO = {
      service_id: this.service_id.value!,
      date_hour: this.date_hour.value!,
      comments: this.comments.value || '',
    };

    if (this.isEditMode && this.bookingId !== null) {
      this.store.dispatch(
        BookingsActions.updateBooking({
          id: this.bookingId,
          update: payload,
        })
      );
    } else {
      this.store.dispatch(BookingsActions.createBooking({ booking: payload }));
    }
  }

  onCancel(): void {
    this.router.navigate(['/makeup-services']);
  }
}
