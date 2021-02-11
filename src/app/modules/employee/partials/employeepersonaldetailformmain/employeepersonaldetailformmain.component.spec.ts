import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeepersonaldetailformmainComponent } from './employeepersonaldetailformmain.component';

describe('EmployeepersonaldetailformmainComponent', () => {
  let component: EmployeepersonaldetailformmainComponent;
  let fixture: ComponentFixture<EmployeepersonaldetailformmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeepersonaldetailformmainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeepersonaldetailformmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
