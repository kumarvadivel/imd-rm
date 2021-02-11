import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditimdmappingComponent } from './editimdmapping.component';

describe('EditimdmappingComponent', () => {
  let component: EditimdmappingComponent;
  let fixture: ComponentFixture<EditimdmappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditimdmappingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditimdmappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
