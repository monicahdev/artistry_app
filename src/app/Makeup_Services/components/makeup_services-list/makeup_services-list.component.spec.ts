import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { MakeupServicesListComponent } from './makeup_services-list.component';

describe('ServicesListComponent', () => {
  let component: MakeupServicesListComponent;
  let fixture: ComponentFixture<MakeupServicesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MakeupServicesListComponent],
      providers: [provideMockStore({ initialState: {} })],
    }).compileComponents();

    fixture = TestBed.createComponent(MakeupServicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
