import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class SensorDataGetterService {

  constructor(private http: Http) { }

  getDataForLabelAndSensor(siteName: string,
                           sensorIP: string,
                           label: string,
                           startDate: string,
                           startTime: string,
                           endDate: string,
                           endTime: string
  ): Promise<string[]> {
    return this.http.get('/api/sites/' + siteName + '/sensors/' + sensorIP + '/' + label + '/from/' + startDate + '/'
                        + startTime + '/until/' + endDate +'/' + endTime)
      .map(response => response.json())
      .toPromise();
  }
}
