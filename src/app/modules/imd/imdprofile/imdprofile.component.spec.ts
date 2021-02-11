import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImdprofileComponent } from './imdprofile.component';

describe('ImdprofileComponent', () => {
  let component: ImdprofileComponent;
  let fixture: ComponentFixture<ImdprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImdprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImdprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
