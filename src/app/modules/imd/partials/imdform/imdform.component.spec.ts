import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImdformComponent } from './imdform.component';

describe('ImdformComponent', () => {
  let component: ImdformComponent;
  let fixture: ComponentFixture<ImdformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImdformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImdformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
