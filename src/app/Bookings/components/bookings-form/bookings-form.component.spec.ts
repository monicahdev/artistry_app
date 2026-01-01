import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { BookingsFormComponent } from './bookings-form.component';

describe('BookingsFormComponent', () => {
  let component: BookingsFormComponent;
  let fixture: ComponentFixture<BookingsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingsFormComponent],
      imports: [RouterTestingModule],
      providers: [provideMockStore({ initialState: {} })],
    }).compileComponents();

    fixture = TestBed.createComponent(BookingsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
