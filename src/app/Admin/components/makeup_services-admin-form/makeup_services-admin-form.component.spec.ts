import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { MakeupServicesAdminFormComponent } from './makeup_services-admin-form.component';

describe('ServicesAdminFormComponent', () => {
  let component: MakeupServicesAdminFormComponent;
  let fixture: ComponentFixture<MakeupServicesAdminFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MakeupServicesAdminFormComponent],
      imports: [RouterTestingModule, ReactiveFormsModule],
      providers: [provideMockStore({ initialState: {} })],
    }).compileComponents();

    fixture = TestBed.createComponent(MakeupServicesAdminFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
