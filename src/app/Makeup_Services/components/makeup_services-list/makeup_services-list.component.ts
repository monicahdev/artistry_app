import { Component, OnInit } from '@angular/core';
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
  services$: Observable<MakeupServiceDTO[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.services$ = this.store.select(selectAllMakeupServices);
    this.loading$ = this.store.select(selectMakeupServicesLoading);
  }

  ngOnInit(): void {
    this.store.dispatch(MakeupServicesActions.loadMakeupServices());
  }
}
