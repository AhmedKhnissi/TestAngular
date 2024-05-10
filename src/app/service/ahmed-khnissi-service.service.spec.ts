import { TestBed } from '@angular/core/testing';

import { AhmedKhnissiServiceService } from './ahmed-khnissi-service.service';

describe('AhmedKhnissiServiceService', () => {
  let service: AhmedKhnissiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AhmedKhnissiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
