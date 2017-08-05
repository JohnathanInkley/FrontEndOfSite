import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {UserService} from "../../log-in/user.service";
import {SiteService} from "../site/site.service";

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.css']
})
export class AdminSettingsComponent implements OnInit {

  users: string[] = [];
  sites: string[] = [];

  constructor(private location: Location,
              private userService: UserService,
              private siteService: SiteService) { }

  ngOnInit() {
    this.getListOfUsers();
    this.getListOfSites();
  }

  goBack() {
    this.location.back();
  }

  private getListOfUsers() {
    this.userService.getAllUsernames().then(users => this.users = users);
  }

  private getListOfSites() {
    this.siteService
      .getRealSites(JSON.parse(localStorage.getItem("currentUser"))["username"])
      .then(sites => this.sites = sites);
  }
}
