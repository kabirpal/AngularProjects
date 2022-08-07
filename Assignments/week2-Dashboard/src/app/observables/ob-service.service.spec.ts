import { TestBed } from '@angular/core/testing';

import { ObServiceService } from './ob-service.service';

describe('ObServiceService', () => {
  let service: ObServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
