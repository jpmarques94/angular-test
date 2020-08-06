import { TestBed } from '@angular/core/testing';

import { UITestService } from './ui-test.service';

describe('UITestService', () => {
  let service: UITestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UITestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
