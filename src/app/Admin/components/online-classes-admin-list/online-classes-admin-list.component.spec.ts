import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineClassesAdminListComponent } from './online-classes-admin-list.component';

describe('OnlineClassesAdminListComponent', () => {
  let component: OnlineClassesAdminListComponent;
  let fixture: ComponentFixture<OnlineClassesAdminListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnlineClassesAdminListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnlineClassesAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
