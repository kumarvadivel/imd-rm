import { TestBed } from '@angular/core/testing';

import { UnallocatedimdService } from './unallocatedimd.service';

describe('UnallocatedimdService', () => {
  let service: UnallocatedimdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnallocatedimdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
