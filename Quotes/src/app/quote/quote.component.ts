import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote(1,'Determine your priorities and focus on them','Eileen McDargh',new Date(2020,4,10)),
    new Quote(2,'Reality is wrong, dreams are for real','Tupac',new Date(2018,7,12))

  ];
   
   deleteQuote(isComplete){
     if (isComplete){
     
     }
   }

  constructor() { }

  ngOnInit(): void {
  }

}
