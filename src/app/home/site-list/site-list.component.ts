import { Component, OnInit } from '@angular/core';
import {Site} from "../site/site";
import {SiteService} from "../site/site.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.css']
})

export class SiteListComponent implements OnInit {
  sites: string[] = [];

  constructor(
    private siteService: SiteService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getSites();
  }

  private getSites() {
    let user = JSON.parse(localStorage.getItem('currentUser'));
    this.siteService.getRealSites(user.username).then(sites => {
      this.sites = sites;
    });
  }
}
