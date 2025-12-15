import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../app.reducers';
import * as MakeupServicesActions from '../../actions/makeup_services.actions';
import { MakeupServiceDTO } from '../../models/makeup_service.dto';
import {
  selectAllMakeupServices,
  selectMakeupServicesLoading,
} from '../../selectors/makeup_service.selectors';
@Component({
  selector: 'app-makeup_services-list',
  templateUrl: './makeup_services-list.component.html',
  styleUrls: ['./makeup_services-list.component.scss'],
})
export class MakeupServicesListComponent implements OnInit {
  makeupServices$: Observable<MakeupServiceDTO[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<AppState>, private router: Router) {
    this.makeupServices$ = this.store.select(selectAllMakeupServices);
    this.loading$ = this.store.select(selectMakeupServicesLoading);
  }

  ngOnInit(): void {
    this.store.dispatch(MakeupServicesActions.loadMakeupServices());
  }

  onBook(serviceId: number): void {
    this.router.navigate(['/bookings/form'], {
      queryParams: { serviceId },
    });
  }

  filterText = '';

  filteredServices(services: MakeupServiceDTO[]): MakeupServiceDTO[] {
    if (!this.filterText) return services;

    return services.filter((s) =>
      s.service_name.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}
