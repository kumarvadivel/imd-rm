import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestshowComponent } from './requestshow.component';

describe('RequestshowComponent', () => {
  let component: RequestshowComponent;
  let fixture: ComponentFixture<RequestshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestshowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
