import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditimdformComponent } from './editimdform.component';

describe('EditimdformComponent', () => {
  let component: EditimdformComponent;
  let fixture: ComponentFixture<EditimdformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditimdformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditimdformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
