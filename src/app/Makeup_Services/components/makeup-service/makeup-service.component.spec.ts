import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeupServiceComponent } from './makeup-service.component';

describe('MakeupServiceComponent', () => {
  let component: MakeupServiceComponent;
  let fixture: ComponentFixture<MakeupServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MakeupServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MakeupServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
