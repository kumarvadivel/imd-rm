import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigfieldComponent } from './configfield.component';

describe('ConfigfieldComponent', () => {
  let component: ConfigfieldComponent;
  let fixture: ComponentFixture<ConfigfieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigfieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
