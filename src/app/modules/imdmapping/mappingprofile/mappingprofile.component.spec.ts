import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MappingprofileComponent } from './mappingprofile.component';

describe('MappingprofileComponent', () => {
  let component: MappingprofileComponent;
  let fixture: ComponentFixture<MappingprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MappingprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MappingprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
