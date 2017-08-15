import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {User} from "../user";
import {AlertService} from "../alert.service";

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {
  currentUser: User;
  oldPassword: string;
  newPassword: string;
  loading = false;
  pageTitle: string = "Account settings";

  constructor(
    private userService: UserService,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  saveChanges() {
    this.loading = true;
    this.userService.update(this.currentUser).subscribe(
      data => {
        this.alertService.success('Changes saved', true);
        let user = data;
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('jwt', user.token);
        this.router.navigate(['']);
      },
      error => {
        console.log("BAD STUFF");
        this.alertService.error('Could not update user details');
        this.loading = false;
      }
    );
  }

  savePasswordChanges() {
    this.loading = true;
    this.userService.updatePassword(this.oldPassword, this.newPassword).subscribe(
      data => {
        if (data === true) {
          this.alertService.success('Password updated', true);
          this.router.navigate(['']);
        } else {
          this.alertService.error('Old password incorrect, please try again');
          this.loading = false;
        }
      }
    );
  }

}
