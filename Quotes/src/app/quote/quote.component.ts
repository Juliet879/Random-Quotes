import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    {id:1,name:'Determine your priorities and focus on them',description:'Eileen McDargh'},
    {id:2,name:'Reality is wrong, dreams are for real',description:'Tupac'},
    {id:3,name:'What consumes your mind controls your life',description:'Juliet'},

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
