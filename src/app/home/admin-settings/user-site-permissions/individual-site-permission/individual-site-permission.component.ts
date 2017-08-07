import {Component, OnInit, Injectable, Input, Output, EventEmitter} from '@angular/core';
import {SiteService} from "../../../site/site.service";

@Component({
  selector: 'app-individual-site-permission',
  templateUrl: './individual-site-permission.component.html',
  styleUrls: ['./individual-site-permission.component.css']
})

@Injectable()
export class IndividualSitePermissionComponent implements OnInit {
  @Input()
  username: string;
  @Input()
  site: string;

  value: boolean;

  @Output()
  select: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private siteService: SiteService) { }

  ngOnInit() {
    this.siteService.getRealSites(this.username).then(sites => {
      if (sites.indexOf(this.site) > -1) {
        this.value = true;
      } else {
        this.value = false;
      }
    });
  }

  setChoice(option: boolean) {
    this.select.emit(option);
  }

}
