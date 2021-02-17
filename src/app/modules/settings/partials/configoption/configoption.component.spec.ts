import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigoptionComponent } from './configoption.component';

describe('ConfigoptionComponent', () => {
  let component: ConfigoptionComponent;
  let fixture: ComponentFixture<ConfigoptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigoptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
