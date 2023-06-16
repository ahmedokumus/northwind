import { Component, OnInit } from '@angular/core';
import { CardItem } from 'src/app/models/cardItem';

@Component({
  selector: 'app-card-summary',
  templateUrl: './card-summary.component.html',
  styleUrls: ['./card-summary.component.css'],
})
export class CardSummaryComponent implements OnInit {
  //
  cardItems: CardItem[];

  constructor() {}

  ngOnInit(): void {}
}
