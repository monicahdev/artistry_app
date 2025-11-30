import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../app.reducers';
import * as AuthActions from '../../actions/auth.actions';
import { AuthDTO } from '../../models/auth.dto';
import {
  selectAuthError,
  selectAuthLoading,
} from '../../selectors/auth.selectors';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  email: FormControl;
  password: FormControl;
  registerForm: FormGroup;

  loading$: Observable<boolean>;
  error$: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {
    this.email = new FormControl('', [Validators.required, Validators.email]);

    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
    ]);

    this.registerForm = this.formBuilder.group({
      email: this.email,
      password: this.password,
    });

    this.loading$ = this.store.select(selectAuthLoading);
    this.error$ = this.store.select(selectAuthError);
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const email = this.email.value;
    const password = this.password.value;

    const credentials: AuthDTO = {
      email: email as string,
      password: password as string,
      user_id: '',
      access_token: '',
      token_type: '',
    };

    this.store.dispatch(AuthActions.register({ credentials }));
  }
}
