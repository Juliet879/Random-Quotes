import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   quote:string[];

   constructor(){
     this.quote = ['Yesterday you said tomorrow. Just do it','I don’t need it to be easy, I need it to be worth it',]
   }
}
