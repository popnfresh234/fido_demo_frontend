import { TestBed } from '@angular/core/testing';

import { UafService } from './uaf.service';

describe('UafService', () => {
  let service: UafService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UafService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
