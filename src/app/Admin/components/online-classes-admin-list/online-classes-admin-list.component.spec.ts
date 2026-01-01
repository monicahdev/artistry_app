import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { OnlineClassesAdminListComponent } from './online-classes-admin-list.component';

describe('OnlineClassesAdminListComponent', () => {
  let component: OnlineClassesAdminListComponent;
  let fixture: ComponentFixture<OnlineClassesAdminListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnlineClassesAdminListComponent],
      providers: [provideMockStore({ initialState: {} })],
    }).compileComponents();

    fixture = TestBed.createComponent(OnlineClassesAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
