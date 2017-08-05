import { Injectable } from '@angular/core';
import {Site} from "./site";
import {RequestOptions, Http, Response, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SiteService {

  dummySite: Site[] =[];

  constructor(private http: Http) {
    this.dummySite[0] = new Site();
    this.dummySite[0].name = 'Winery';
    this.dummySite[0].id = 100;
    this.dummySite[1] = new Site();
    this.dummySite[1].name = 'Factory';
    this.dummySite[1].id = 101;
  }

  getSites(): Promise<Site[]> {
    return Promise.resolve(this.dummySite);
  }

  getSite(id: number): Promise<Site> {
    let matchingSite = new Site();
    for (let i = 0; i < this.dummySite.length; i++) {
      if (this.dummySite[i].id === id) {
        matchingSite = this.dummySite[i];
      }
    }
    return Promise.resolve(matchingSite);
  }

  getRealSites(username: string) : Promise<string[]> {
    return this.http.get('/api/' + username + '/sites')
      .map(response => response.json())
      .toPromise();
  }

  setSitePermissionForUser(username: string, site: string, event: boolean) {
    if (event === true) {
      this.http.put('/api/sites/' + site + '/addUser/' + username, "", null)
        .map(response => {
          console.log(response.statusText + " for: user " + username + " has site permission " + site + " as " + event)
        }).subscribe();
    } else {
      this.http.put('/api/sites/' + site + '/removeUser/' + username, "", null)
        .map(response => {
          console.log(response.statusText + " for: user " + username + " has site permission " + site + " as " + event)
        }).subscribe();
    }
  }
}
