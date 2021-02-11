import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeamComponent } from './changeam.component';

describe('ChangeamComponent', () => {
  let component: ChangeamComponent;
  let fixture: ComponentFixture<ChangeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
