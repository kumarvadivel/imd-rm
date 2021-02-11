import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImdmappingpageComponent } from './imdmappingpage.component';

describe('ImdmappingpageComponent', () => {
  let component: ImdmappingpageComponent;
  let fixture: ComponentFixture<ImdmappingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImdmappingpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImdmappingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
