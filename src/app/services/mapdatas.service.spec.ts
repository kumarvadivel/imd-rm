import { TestBed } from '@angular/core/testing';

import { MapdatasService } from './mapdatas.service';

describe('MapdatasService', () => {
  let service: MapdatasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapdatasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
