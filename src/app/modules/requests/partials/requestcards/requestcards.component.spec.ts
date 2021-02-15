import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestcardsComponent } from './requestcards.component';

describe('RequestcardsComponent', () => {
  let component: RequestcardsComponent;
  let fixture: ComponentFixture<RequestcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestcardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
