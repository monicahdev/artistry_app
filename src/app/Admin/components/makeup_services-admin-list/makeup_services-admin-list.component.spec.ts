import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesAdminListComponent } from './services-admin-list.component';

describe('ServicesAdminListComponent', () => {
  let component: ServicesAdminListComponent;
  let fixture: ComponentFixture<ServicesAdminListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicesAdminListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
