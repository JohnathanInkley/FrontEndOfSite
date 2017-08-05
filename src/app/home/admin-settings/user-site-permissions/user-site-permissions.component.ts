import {Component, OnInit, Input, Injectable} from '@angular/core';
import {MdRadioModule} from '@angular/material';
import {SiteService} from "../../site/site.service";

@Component({
  selector: 'app-user-site-permissions',
  templateUrl: './user-site-permissions.component.html',
  styleUrls: ['./user-site-permissions.component.css']
})

@Injectable()
export class UserSitePermissionsComponent implements OnInit {
  @Input()
  username: string;
  @Input()
  sites: string[];

  constructor(private siteService: SiteService) { }

  ngOnInit() {
  }

  setPermissions(event, username, site) {
    this.siteService.setSitePermissionForUser(username, site, event);
  }

}
