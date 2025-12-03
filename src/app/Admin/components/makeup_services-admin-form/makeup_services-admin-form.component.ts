import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';
import * as AdminActions from '../../actions/admin.actions';
import { MakeupServiceCreateDTO } from '../../services/admin.services';

@Component({
  selector: 'app-makeup_services-admin-form',
  templateUrl: './makeup_services-admin-form.component.html',
  styleUrls: ['./makeup_services-admin-form.component.scss'],
})
export class MakeupServicesAdminFormComponent {
  makeup_serviceForm: FormGroup;
  makeup_service_name: FormControl;
  description: FormControl;
  photo: FormControl;
  price_from: FormControl;
  duration: FormControl;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router
  ) {
    this.makeup_service_name = new FormControl('', [Validators.required]);
    this.description = new FormControl('', [Validators.required]);
    this.photo = new FormControl('');
    this.price_from = new FormControl(0, [
      Validators.required,
      Validators.min(0),
    ]);
    this.duration = new FormControl(60, [
      Validators.required,
      Validators.min(1),
    ]);

    this.makeup_serviceForm = this.fb.group({
      makeup_service_name: this.makeup_service_name,
      description: this.description,
      photo: this.photo,
      price_from: this.price_from,
      duration: this.duration,
    });
  }

  onSubmit(): void {
    if (this.makeup_serviceForm.invalid) {
      this.makeup_serviceForm.markAllAsTouched();
      return;
    }

    const payload: MakeupServiceCreateDTO = {
      //makeup_service
      service_name: this.makeup_service_name.value,
      description: this.description.value,
      photo: this.photo.value,
      price_from: this.price_from.value,
      duration: this.duration.value,
    };

    //crea nuevo servicio
    this.store.dispatch(AdminActions.createAdminMakeupService({ payload }));
    //lo muestra en la lista de admin/services
    this.router.navigate(['/admin/services']);
  }
}
