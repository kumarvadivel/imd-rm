import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargethistoryComponent } from './targethistory.component';

describe('TargethistoryComponent', () => {
  let component: TargethistoryComponent;
  let fixture: ComponentFixture<TargethistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargethistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TargethistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
