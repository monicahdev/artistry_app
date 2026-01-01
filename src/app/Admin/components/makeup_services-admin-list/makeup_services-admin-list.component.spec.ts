import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { MakeupServicesAdminListComponent } from './makeup_services-admin-list.component';

describe('ServicesAdminListComponent', () => {
  let component: MakeupServicesAdminListComponent;
  let fixture: ComponentFixture<MakeupServicesAdminListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MakeupServicesAdminListComponent],
      providers: [provideMockStore({ initialState: {} })],
    }).compileComponents();

    fixture = TestBed.createComponent(MakeupServicesAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
