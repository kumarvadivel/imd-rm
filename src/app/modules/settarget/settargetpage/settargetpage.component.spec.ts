import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettargetpageComponent } from './settargetpage.component';

describe('SettargetpageComponent', () => {
  let component: SettargetpageComponent;
  let fixture: ComponentFixture<SettargetpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettargetpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettargetpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
