import { TestBed } from '@angular/core/testing';

import { BitforgeblogService } from './bitforgeblog.service';

describe('BitforgeblogService', () => {
  let service: BitforgeblogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BitforgeblogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
