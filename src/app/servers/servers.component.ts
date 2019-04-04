import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers', templateUrl: './servers.component.html', styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  showSecret = false;
  counter = [];

  constructor() {
  }

  ngOnInit() {
  }

  displayDetails() {
    this.showSecret = true;
    this.counter.push(new Date().getSeconds());

    console.log(this.counter);
  }
}
