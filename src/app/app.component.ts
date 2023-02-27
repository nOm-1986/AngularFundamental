import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //Vista asociada a este componente
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  name = 'Fabian Beltran';
  age = 36;
  imagen = 'https://source.unsplash.com/random';
}
