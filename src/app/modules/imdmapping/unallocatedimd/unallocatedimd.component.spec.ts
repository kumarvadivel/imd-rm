import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnallocatedimdComponent } from './unallocatedimd.component';

describe('UnallocatedimdComponent', () => {
  let component: UnallocatedimdComponent;
  let fixture: ComponentFixture<UnallocatedimdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnallocatedimdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnallocatedimdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
