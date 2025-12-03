import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../app.reducers';
import * as MakeupServicesActions from '../../../Makeup_Services/actions/makeup_services.actions';
import { MakeupServiceDTO } from '../../../Makeup_Services/models/makeup_service.dto';
import {
  selectAllMakeupServices,
  selectMakeupServicesLoading,
} from '../../../Makeup_Services/selectors/makeup_service.selectors';
import * as AdminActions from '../../actions/admin.actions';

@Component({
  selector: 'app-makeup_services-admin-list',
  templateUrl: './makeup_services-admin-list.component.html',
  styleUrls: ['./makeup_services-admin-list.component.scss'],
})
export class MakeupServicesAdminListComponent implements OnInit {
  makeup_services$: Observable<MakeupServiceDTO[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<AppState>, private router: Router) {
    this.makeup_services$ = this.store.select(selectAllMakeupServices);
    this.loading$ = this.store.select(selectMakeupServicesLoading);
  }

  ngOnInit(): void {
    this.store.dispatch(MakeupServicesActions.loadMakeupServices());
  }

  onNewMakeupService(): void {
    this.router.navigate(['/admin/services/new']);
  }

  onDeleteMakeupService(id: number): void {
    const confirmed = confirm('¿Quieres eliminar este servicio?');
    if (!confirmed) return;

    this.store.dispatch(AdminActions.deleteAdminMakeupService({ id }));
  }
}
