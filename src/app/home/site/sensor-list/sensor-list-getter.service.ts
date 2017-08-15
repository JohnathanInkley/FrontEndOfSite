import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class SensorListGetterService {

  constructor(private http: Http) { }

  getSensorsForSite(siteName: string): Promise<string[]> {
    return this.http.get('/api/sites/' + siteName + '/sensors')
    .map(response => response.json())
    .toPromise();
  }

  getSensorsAndLocationsForSite(siteName: string): Promise<string[]>  {
    return this.http.get('/api/sites/' + siteName + '/sensorsAndLocations')
      .map(response => response.json())
      .toPromise();
  }
}
