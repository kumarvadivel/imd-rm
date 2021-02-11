import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImdmappingformComponent } from './imdmappingform.component';

describe('ImdmappingformComponent', () => {
  let component: ImdmappingformComponent;
  let fixture: ComponentFixture<ImdmappingformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImdmappingformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImdmappingformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
