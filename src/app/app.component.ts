import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  name  : string = "Higino";

  people: string[] = ['Ironman', 'Spiderman', 'Thor', 'Loki', 'Groot'];
  
  PI: number = Math.PI;
  percentage: number = 0.234; //Percent
  salario: number = 1234; //CurrencyPipe

  heroe = {
    name: 'Logan',
    keycode: 'Wolverine',
    age: 500,
    direction: {
      street: 'primeira',
      home: 20
    }
  }


}
