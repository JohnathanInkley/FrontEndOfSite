import { Component, OnInit } from '@angular/core';
import {User} from "../log-in/user";

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  isAdmin: boolean;
  users: User[] = [];

  constructor() {
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.currentUser["isAdmin"] === "true") {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
  }
}
