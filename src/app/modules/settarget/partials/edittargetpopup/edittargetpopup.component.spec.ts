import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittargetpopupComponent } from './edittargetpopup.component';

describe('EdittargetpopupComponent', () => {
  let component: EdittargetpopupComponent;
  let fixture: ComponentFixture<EdittargetpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdittargetpopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittargetpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
