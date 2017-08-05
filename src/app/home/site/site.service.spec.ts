import { TestBed, inject } from '@angular/core/testing';

import { SiteServiceService } from './site-service.service';

describe('SiteServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SiteServiceService]
    });
  });

  it('should be created', inject([SiteServiceService], (service: SiteServiceService) => {
    expect(service).toBeTruthy();
  }));
});
