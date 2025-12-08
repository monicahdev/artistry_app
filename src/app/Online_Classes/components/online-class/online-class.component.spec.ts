import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineClassComponent } from './online-class.component';

describe('OnlineClassComponent', () => {
  let component: OnlineClassComponent;
  let fixture: ComponentFixture<OnlineClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnlineClassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnlineClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
