import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CardItem } from 'src/app/models/cardItem';
import { Product } from 'src/app/models/product';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-summary',
  templateUrl: './card-summary.component.html',
  styleUrls: ['./card-summary.component.css'],
})
export class CardSummaryComponent implements OnInit {
  //
  cardItems: CardItem[];

  constructor(
    private cardService: CardService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getCard();
  }

  getCard() {
    this.cardItems = this.cardService.list();
  }

  removeFromCard(product: Product) {
    this.cardService.removeFromCard(product);
    this.toastrService.error('Sepetten çıkarıldı', product.productName);
  }
}
