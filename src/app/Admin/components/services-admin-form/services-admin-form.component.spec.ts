import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesAdminFormComponent } from './services-admin-form.component';

describe('ServicesAdminFormComponent', () => {
  let component: ServicesAdminFormComponent;
  let fixture: ComponentFixture<ServicesAdminFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicesAdminFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesAdminFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
