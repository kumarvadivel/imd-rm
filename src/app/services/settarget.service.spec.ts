import { TestBed } from '@angular/core/testing';

import { SettargetService } from './settarget.service';

describe('SettargetService', () => {
  let service: SettargetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettargetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
