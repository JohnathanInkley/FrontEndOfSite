import { TestBed, inject } from '@angular/core/testing';

import { SensorListGetterService } from './sensor-list-getter.service';

describe('SensorListGetterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SensorListGetterService]
    });
  });

  it('should be created', inject([SensorListGetterService], (service: SensorListGetterService) => {
    expect(service).toBeTruthy();
  }));
});
