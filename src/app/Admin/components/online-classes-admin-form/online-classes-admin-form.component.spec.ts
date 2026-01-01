import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { OnlineClassesAdminFormComponent } from './online-classes-admin-form.component';

describe('OnlineClassesAdminFormComponent', () => {
  let component: OnlineClassesAdminFormComponent;
  let fixture: ComponentFixture<OnlineClassesAdminFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnlineClassesAdminFormComponent],
      imports: [RouterTestingModule],
      providers: [provideMockStore({ initialState: {} })],
    }).compileComponents();

    fixture = TestBed.createComponent(OnlineClassesAdminFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
