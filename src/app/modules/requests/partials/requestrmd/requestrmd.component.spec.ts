import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestrmdComponent } from './requestrmd.component';

describe('RequestrmdComponent', () => {
  let component: RequestrmdComponent;
  let fixture: ComponentFixture<RequestrmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestrmdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestrmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
