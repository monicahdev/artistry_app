import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../app.reducers';
import * as MakeupServicesActions from '../../actions/makeup_services.actions';
import { MakeupServiceDTO } from '../../models/makeup_service.dto';
import {
  selectMakeupServicesLoading,
  selectSelectedMakeupService,
} from '../../selectors/makeup_service.selectors';
@Component({
  selector: 'app-makeup-service',
  templateUrl: './makeup-service.component.html',
  styleUrl: './makeup-service.component.scss',
})
export class MakeupServiceComponent {
  makeupService$: Observable<MakeupServiceDTO | null>;
  loading$: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private store: Store<AppState>
  ) {
    this.makeupService$ = this.store.select(selectSelectedMakeupService);
    this.loading$ = this.store.select(selectMakeupServicesLoading);
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = +idParam;
      this.store.dispatch(MakeupServicesActions.loadMakeupServiceById({ id }));
    }
  }

  onBook(serviceId: number): void {
    this.router.navigate(['/bookings/form'], {
      queryParams: { serviceId },
    });
  }
}
