import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeenewComponent } from './employeenew.component';

describe('EmployeenewComponent', () => {
  let component: EmployeenewComponent;
  let fixture: ComponentFixture<EmployeenewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeenewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
