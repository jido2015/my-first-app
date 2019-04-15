import {Component} from '@angular/core';

@Component({
  selector: 'app-root', templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  oddNumbers: number [] = [];
  evenNumbers: number[] = [];

  onValueChange(values: number) {
    if ( values % 2 === 0) {
      this.evenNumbers.push(values);
    } else {
      this.oddNumbers.push(values);
    }
  }
}

