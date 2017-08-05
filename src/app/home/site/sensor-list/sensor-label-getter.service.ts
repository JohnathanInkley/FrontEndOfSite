import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class SensorLabelGetterService {

  constructor(private http: Http) { }

  getLabelsForSensor(siteName: string, sensorIP: string): Promise<string[]> {
    return this.http.get('/api/sites/' + siteName + '/sensors/' + sensorIP + '/labels')
      .map(response => response.json())
      .toPromise();
  }
}
