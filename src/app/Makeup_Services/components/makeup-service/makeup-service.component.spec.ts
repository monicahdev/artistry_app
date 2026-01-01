import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { MakeupServiceComponent } from './makeup-service.component';

describe('MakeupServiceComponent', () => {
  let component: MakeupServiceComponent;
  let fixture: ComponentFixture<MakeupServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MakeupServiceComponent],
      imports: [RouterTestingModule],
      providers: [provideMockStore({ initialState: {} })],
    }).compileComponents();

    fixture = TestBed.createComponent(MakeupServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
