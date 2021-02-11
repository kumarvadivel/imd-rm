import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImddetailsComponent } from './imddetails.component';

describe('ImddetailsComponent', () => {
  let component: ImddetailsComponent;
  let fixture: ComponentFixture<ImddetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImddetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
