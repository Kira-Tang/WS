import { TestBed } from '@angular/core/testing';

import { WebcallService } from './webcall.service';

describe('WebcallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebcallService = TestBed.get(WebcallService);
    expect(service).toBeTruthy();
  });
});
