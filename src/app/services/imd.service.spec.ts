import { TestBed } from '@angular/core/testing';

import { ImdService } from './imd.service';

describe('ImdService', () => {
  let service: ImdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
