import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  public quote = "Whatever you do ,do it well-Wait Disney";

  constructor() { }

  ngOnInit(): void {
  }

}
