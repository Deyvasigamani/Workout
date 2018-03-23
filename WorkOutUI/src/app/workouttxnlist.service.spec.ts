import { TestBed, inject } from '@angular/core/testing';

import { WorkouttxnlistService } from './workouttxnlist.service';

describe('WorkouttxnlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkouttxnlistService]
    });
  });

  it('should be created', inject([WorkouttxnlistService], (service: WorkouttxnlistService) => {
    expect(service).toBeTruthy();
  }));
});
