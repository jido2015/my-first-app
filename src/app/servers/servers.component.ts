import { Component, OnInit } from '@angular/core';
import {stringify} from 'querystring';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

 // allowNewServer = false;
 // serverCreationStatus = 'No server created';
 // serverName = 'Testserver';

  username = '';
  disableButton = false;
  constructor() {
/*    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);*/

  }

  ngOnInit() {
  }

 /* onCreateServer() {
    this.serverCreationStatus = 'Server was created ' + this.serverName;
  }*/

  onUpdateServerName(event: Event) {
  }

  checkUsername(event: Event) {
    this.username = (<HTMLInputElement> event.target).value;
    if (this.username.length > 0) {
      this.disableButton = true;
    } else {
      this.disableButton = false;
    }
  }

  resetInputButton() {
    this.username = '';
    this.disableButton = false;
  }
}
