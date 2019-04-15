import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() valueChange = new EventEmitter<number>();
  counter = 1;
  interval;
  constructor() { }

  ngOnInit() {
  }

  startGame() {
    this.interval = setInterval(() => {
      this.valueChange.emit(this.counter);
      this.counter ++;
    }, 1000);
  }
  pauseGame() {
    clearInterval(this.interval);
  }
}
