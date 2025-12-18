import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';
import * as AdminActions from '../../actions/admin.actions';
import { MakeupServiceCreateDTO } from '../../services/admin.services';

@Component({
  selector: 'app-makeup_services-admin-form',
  templateUrl: './makeup_services-admin-form.component.html',
  styleUrls: ['./makeup_services-admin-form.component.scss'],
})
export class MakeupServicesAdminFormComponent implements OnInit {
  makeup_serviceForm: FormGroup;
  makeup_service_name: FormControl;
  description: FormControl;
  photo: FormControl;
  price_from: FormControl;
  duration: FormControl;

  isEditMode = false;
  serviceId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute
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
  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const idParam = params.get('id');

      if (idParam) {
        this.serviceId = +idParam;
        this.isEditMode = true;

        const nameParam = params.get('makeup_service_name');
        const descriptionParam = params.get('description');
        const photoParam = params.get('photo');
        const priceFromParam = params.get('price_from');
        const durationParam = params.get('duration');

        if (nameParam) this.makeup_service_name.setValue(nameParam);
        if (descriptionParam) this.description.setValue(descriptionParam);
        if (photoParam) this.photo.setValue(photoParam);
        if (priceFromParam) this.price_from.setValue(+priceFromParam);
        if (durationParam) this.duration.setValue(+durationParam);
      }
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
    //actualizar servicio existentes
    if (this.isEditMode && this.serviceId !== null) {
      this.store.dispatch(
        AdminActions.updateAdminMakeupService({
          id: this.serviceId,
          payload,
        })
      );
    } else {
      //crea nuevo servicio
      this.store.dispatch(AdminActions.createAdminMakeupService({ payload }));
      //lo muestra en la lista de admin/services
      this.router.navigate(['/admin/services']);
    }
  }

  onCancel(): void {
    this.router.navigate(['/admin/services']);
  }
}
