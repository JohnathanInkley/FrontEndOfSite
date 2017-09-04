import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {User} from "./user";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getAllUsernames() : Promise<string[]> {
    return this.http.get('/api/users/userList').map(response => response.json()).toPromise();
  }

  create(user: User) {
    return this.http.post('/api/users', user, this.jwt()).map((response: Response) => response.json());
  }

  update(user: User) {
    return this.http.put('/api/users', user, this.options).map((response: Response) => response.json());
  }

  updatePassword(oldPasswordVal: string, newPasswordVal: string) {
    return this.http.put(
      '/api/users/updatePassword',
      JSON.stringify({oldPassword: oldPasswordVal, newPassword: newPasswordVal}),
      this.options
    ).map((response: Response) => {
      return (response.statusText === 'OK');
    });
  }

  private jwt() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let jwt = localStorage.getItem('jwt');
    if (currentUser && currentUser.token) {
      let headers = new Headers({'Authorization': 'Bearer ' + jwt});
      return new RequestOptions({headers: headers});
    }
  }

}
