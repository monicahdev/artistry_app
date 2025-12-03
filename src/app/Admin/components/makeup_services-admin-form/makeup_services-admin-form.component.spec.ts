import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeupServicesAdminFormComponent } from './makeup_services-admin-form.component';

describe('ServicesAdminFormComponent', () => {
  let component: MakeupServicesAdminFormComponent;
  let fixture: ComponentFixture<MakeupServicesAdminFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MakeupServicesAdminFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MakeupServicesAdminFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
