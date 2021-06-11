import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  name      : string   = "Hulk";
  name2     : string   = 'gonCAlves lUis hIgiNo';
  people    : string[] = ['Ironman', 'Spiderman', 'Thor', 'Loki', 'Groot'];
  PI        : number   = Math.PI;
  percentage: number   = 0.234; //Percent
  salario   : number   = 1234; //CurrencyPipe
  date      : Date     = new Date();
  activar   : boolean  = true;
  
  languege  : string = 'es';
  videoUrl  : string = 'https://www.youtube.com/embed/gfmWQijYjmU'

  promiseValue = new Promise<string>((resolve) => {
     setTimeout(() => {
       resolve('os dados chegaram')
     }, 4500);
  })

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
