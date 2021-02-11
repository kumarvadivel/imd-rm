import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaldetailformComponent } from './personaldetailform.component';

describe('PersonaldetailformComponent', () => {
  let component: PersonaldetailformComponent;
  let fixture: ComponentFixture<PersonaldetailformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaldetailformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaldetailformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
