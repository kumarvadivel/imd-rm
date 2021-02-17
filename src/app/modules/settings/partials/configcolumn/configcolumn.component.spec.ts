import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigcolumnComponent } from './configcolumn.component';

describe('ConfigcolumnComponent', () => {
  let component: ConfigcolumnComponent;
  let fixture: ComponentFixture<ConfigcolumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigcolumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigcolumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
