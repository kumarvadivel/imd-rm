import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiginpComponent } from './configinp.component';

describe('ConfiginpComponent', () => {
  let component: ConfiginpComponent;
  let fixture: ComponentFixture<ConfiginpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiginpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiginpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
