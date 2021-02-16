import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargettableComponent } from './targettable.component';

describe('TargettableComponent', () => {
  let component: TargettableComponent;
  let fixture: ComponentFixture<TargettableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargettableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TargettableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
