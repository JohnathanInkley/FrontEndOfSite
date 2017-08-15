import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class SensorDataGetterService {

  constructor(private http: Http) { }

  getDataForLabelAndSensor(siteName: string,
                           sensorIP: string,
                           analysisChoice: string,
                           interval: string,
                           modulo: string,
                           label: string,
                           startDate: string,
                           startTime: string,
                           endDate: string,
                           endTime: string
  ): Promise<string[]> {
    if (analysisChoice === 'raw') {
      return this.http.get('/api/sites/' + siteName + '/sensors/' + sensorIP + '/' + label + '/from/' + startDate + '/'
        + startTime + '/until/' + endDate + '/' + endTime)
        .map(response => response.json())
        .toPromise();
    } else if (analysisChoice === 'mean') {
      return this.http.get('/api/sites/' + siteName + '/sensors/' + sensorIP + '/' + label + '/meanEvery/' + interval
        + '/modulo/' + modulo +'/from/' + startDate + '/'
        + startTime + '/until/' + endDate + '/' + endTime)
        .map(response => response.json())
        .toPromise();
    } else if (analysisChoice === 'standard deviation') {
      return this.http.get('/api/sites/' + siteName + '/sensors/' + sensorIP + '/' + label + '/sdEvery/' + interval
        + '/modulo/' + modulo +'/from/' + startDate + '/'
        + startTime + '/until/' + endDate + '/' + endTime)
        .map(response => response.json())
        .toPromise();
    }
  }
}
