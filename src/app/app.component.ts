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
  percetagem: number = 0.234;


}
