import {Component, OnInit, Injectable, Input, Output, EventEmitter} from '@angular/core';

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

  @Output()
  select: EventEmitter<boolean> = new EventEmitter<boolean>();

  value: boolean;

  constructor() { }

  ngOnInit() {
  }

  setChoice(option: boolean) {
    this.select.emit(option);
  }

}
