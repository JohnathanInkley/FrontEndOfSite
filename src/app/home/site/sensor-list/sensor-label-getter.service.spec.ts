import { TestBed, inject } from '@angular/core/testing';

import { SensorLabelGetterService } from './sensor-label-getter.service';

describe('SensorLabelGetterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SensorLabelGetterService]
    });
  });

  it('should be created', inject([SensorLabelGetterService], (service: SensorLabelGetterService) => {
    expect(service).toBeTruthy();
  }));
});
