import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewemployeeprofileComponent } from './newemployeeprofile.component';

describe('NewemployeeprofileComponent', () => {
  let component: NewemployeeprofileComponent;
  let fixture: ComponentFixture<NewemployeeprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewemployeeprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewemployeeprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
