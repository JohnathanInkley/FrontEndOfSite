import {Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})

export class DropdownComponenent implements OnInit, OnChanges {
  @Input()
  textForDropdown: string;
  @Input()
  dropdownOptions: string[];
  @Input()
  chosenDefaultOption: string;

  @Output()
  select: EventEmitter<string> = new EventEmitter<string>();

  currentOption: string = "";

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    this.currentOption = this.chosenDefaultOption;
  }

  selectItem(value) {
    console.log('option is ' + value);
    this.select.emit(value);
  }
}
