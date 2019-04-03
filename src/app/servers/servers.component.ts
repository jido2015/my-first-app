import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server created';
  serverName = 'Testserver';
  serverWasCreated = false;
  constructor() {
        setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverWasCreated = true;
    this.serverCreationStatus = 'Server was created ' + this.serverName;
  }
}
