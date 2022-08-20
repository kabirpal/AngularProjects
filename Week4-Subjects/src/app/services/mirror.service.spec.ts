import { TestBed } from '@angular/core/testing';

import { MirrorService } from './mirror.service';

describe('MirrorService', () => {
  let service: MirrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MirrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
