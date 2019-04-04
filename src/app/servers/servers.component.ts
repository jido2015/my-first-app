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
  servers = ['TestServer', 'TestServer2'];
  detailsArray = [];
  details;

  constructor() {
        setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

/*  onCreateServer() {
    this.serverWasCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created ' + this.serverName;
    console.log(this.servers);
  }*/

  displayDetails() {
    this.details = new Date().getSeconds();
    this.detailsArray.push(this.details);

    console.log(this.details);
  }
}
