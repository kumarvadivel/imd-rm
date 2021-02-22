import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettargetindexpageComponent } from './settargetindexpage.component';

describe('SettargetindexpageComponent', () => {
  let component: SettargetindexpageComponent;
  let fixture: ComponentFixture<SettargetindexpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettargetindexpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettargetindexpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
