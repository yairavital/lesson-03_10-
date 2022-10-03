import { Component, VERSION } from '@angular/core';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  username: string = 'hello my name is Avital';
  onClick() {
    this.username = '';
  }
}
