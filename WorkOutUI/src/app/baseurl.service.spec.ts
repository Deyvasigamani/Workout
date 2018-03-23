import { TestBed, inject } from '@angular/core/testing';

import { BaseurlService } from './baseurl.service';

describe('BaseurlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseurlService]
    });
  });

  it('should be created', inject([BaseurlService], (service: BaseurlService) => {
    expect(service).toBeTruthy();
  }));
});
