import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiverequestsComponent } from './activerequests.component';

describe('ActiverequestsComponent', () => {
  let component: ActiverequestsComponent;
  let fixture: ComponentFixture<ActiverequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiverequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiverequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
