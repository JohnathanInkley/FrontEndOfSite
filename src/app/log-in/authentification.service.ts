import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class AuthentificationService {

  constructor(private http: Http) { }

    login(username: string, password: string) {
    console.log(JSON.stringify({username: username, password: password}));
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('/api/authenticate', JSON.stringify({username: username, password: password}), options)
      .map((response: Response) => {
        console.log(response.statusText);
        let user = response.json();
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          localStorage.setItem('jwt', user.token);
        }
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('jwt');
  }


}
