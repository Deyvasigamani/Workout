import { TestBed, inject } from '@angular/core/testing';

import { WorkouttxnService } from './workouttxn.service';

describe('WorkouttxnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkouttxnService]
    });
  });

  it('should be created', inject([WorkouttxnService], (service: WorkouttxnService) => {
    expect(service).toBeTruthy();
  }));
});
