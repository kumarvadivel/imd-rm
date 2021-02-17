import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesspermissionComponent } from './accesspermission.component';

describe('AccesspermissionComponent', () => {
  let component: AccesspermissionComponent;
  let fixture: ComponentFixture<AccesspermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesspermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesspermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
