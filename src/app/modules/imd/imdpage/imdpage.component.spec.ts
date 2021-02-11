import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImdpageComponent } from './imdpage.component';

describe('ImdpageComponent', () => {
  let component: ImdpageComponent;
  let fixture: ComponentFixture<ImdpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImdpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImdpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
