import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';

@Injectable()
export class AuthorizationGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    if (localStorage.getItem('currentUser')) {
      return true;
    } else {
      this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
      return false;
    }
  }

}
