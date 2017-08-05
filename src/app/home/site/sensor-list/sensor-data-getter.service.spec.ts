import { TestBed, inject } from '@angular/core/testing';

import { SensorDataGetterService } from './sensor-data-getter.service';

describe('SensorDataGetterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SensorDataGetterService]
    });
  });

  it('should be created', inject([SensorDataGetterService], (service: SensorDataGetterService) => {
    expect(service).toBeTruthy();
  }));
});
