import { TestBed } from '@angular/core/testing';

import { ErrorHService } from './error-h.service';

describe('ErrorHService', () => {
  let service: ErrorHService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorHService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
