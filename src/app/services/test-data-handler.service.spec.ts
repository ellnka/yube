import {TestBed} from '@angular/core/testing';

import {TestDataHandlerService} from './test-data-handler.service';

describe('TestDataHandlerService', () => {
  let service: TestDataHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestDataHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
