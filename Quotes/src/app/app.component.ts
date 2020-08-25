import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[]=[
    {id:1,name:'Don’t you know your imperfections is a blessing'},
    {id:2,name:'Reality is wrong, dreams are for real'},

  ];
}
