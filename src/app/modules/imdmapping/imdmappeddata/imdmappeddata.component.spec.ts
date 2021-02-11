import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImdmappeddataComponent } from './imdmappeddata.component';

describe('ImdmappeddataComponent', () => {
  let component: ImdmappeddataComponent;
  let fixture: ComponentFixture<ImdmappeddataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImdmappeddataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImdmappeddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
