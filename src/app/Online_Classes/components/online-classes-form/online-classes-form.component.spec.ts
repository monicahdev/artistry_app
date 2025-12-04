import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineClassesFormComponent } from './online-classes-form.component';

describe('OnlineClassesFormComponent', () => {
  let component: OnlineClassesFormComponent;
  let fixture: ComponentFixture<OnlineClassesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnlineClassesFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnlineClassesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
