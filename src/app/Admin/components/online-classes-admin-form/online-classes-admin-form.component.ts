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
import {
  OnlineClassCreateDTO,
  OnlineClassUpdateDTO,
} from '../../services/admin.services';

@Component({
  selector: 'app-online-classes-admin-form',
  templateUrl: './online-classes-admin-form.component.html',
  styleUrl: './online-classes-admin-form.component.scss',
})
export class OnlineClassesAdminFormComponent implements OnInit {
  classForm: FormGroup;
  name = new FormControl('', Validators.required);
  description = new FormControl('', Validators.required);
  url = new FormControl('', [Validators.required]);

  isEditMode = false;
  classId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.classForm = this.fb.group({
      name: this.name,
      description: this.description,
      url: this.url,
    });
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const idParam = params.get('id');
      const nameParam = params.get('name');
      const descriptionParam = params.get('description');
      const urlParam = params.get('url');

      if (idParam) {
        this.isEditMode = true;
        this.classId = +idParam;
      }

      if (nameParam) this.name.setValue(nameParam);
      if (descriptionParam) this.description.setValue(descriptionParam);
      if (urlParam) this.url.setValue(urlParam);
    });
  }

  onSubmit(): void {
    if (this.classForm.invalid) {
      this.classForm.markAllAsTouched();
      return;
    }

    const payload: OnlineClassCreateDTO = {
      name: this.name.value!,
      description: this.description.value!,
      url: this.url.value!,
    };

    if (this.isEditMode && this.classId !== null) {
      const updatePayload: OnlineClassUpdateDTO = {
        ...payload,
      };

      this.store.dispatch(
        AdminActions.updateAdminOnlineClass({
          id: this.classId,
          payload: updatePayload,
        })
      );
    } else {
      this.store.dispatch(AdminActions.createAdminOnlineClass({ payload }));
    }
    this.router.navigate(['/admin/classes']);
  }

  onCancel(): void {
    this.router.navigate(['/admin/classes']);
  }
}
