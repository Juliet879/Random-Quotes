import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  template: `
        <h1>
           add quote
        </h1>
  `,
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
