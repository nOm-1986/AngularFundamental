import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //Vista asociada a este componente
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  name = 'Fabian Beltran';
  age = 89;
  imagen = 'https://picsum.photos/200/300';
  btnDisabled = false;

  person = {
    name: 'Adrian Beltrán',
    age: 37,
    avatar: 'https://picsum.photos/200/300'
  }
}
