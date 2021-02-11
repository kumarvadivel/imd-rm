import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuisnesslineformComponent } from './buisnesslineform.component';

describe('BuisnesslineformComponent', () => {
  let component: BuisnesslineformComponent;
  let fixture: ComponentFixture<BuisnesslineformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuisnesslineformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuisnesslineformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
