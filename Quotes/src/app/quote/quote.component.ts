import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    {id:1,name:'Don’t you know your imperfections is a blessing'},
    {id:2,name:'Reality is wrong, dreams are for real'},

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
