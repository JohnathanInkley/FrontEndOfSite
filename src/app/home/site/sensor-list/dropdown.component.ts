import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})

export class DropdownComponenent implements OnInit {
  @Input()
  textForDropdown: string;
  @Input()
  dropdownOptions: string[];

  @Output()
  select: EventEmitter<string> = new EventEmitter<string>();

  currentOption: string = "";

  constructor() {}

  ngOnInit() {}

  selectItem(value) {
    console.log('option is ' + value);
    this.select.emit(value);
  }
}
