import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BookingsFormComponent } from './components/bookings-form/bookings-form.component';
import { BookingsListComponent } from './components/bookings-list/bookings-list.component';
@NgModule({
  declarations: [BookingsListComponent, BookingsFormComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [BookingsListComponent, BookingsFormComponent],
})
export class BookingModule {}
