import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestimdComponent } from './requestimd.component';

describe('RequestimdComponent', () => {
  let component: RequestimdComponent;
  let fixture: ComponentFixture<RequestimdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestimdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestimdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
