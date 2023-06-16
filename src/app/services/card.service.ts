import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { CardItems } from '../models/cardItems';
import { CardItem } from '../models/cardItem';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  //
  constructor() {}

  addToCard(product: Product) {
    let item = CardItems.find((p) => p.product.productId == product.productId);
    if (item) {
      item.quantity += 1;
    } else {
      let cardItem = new CardItem();
      cardItem.product = product;
      cardItem.quantity = 1;
      CardItems.push(cardItem);
    }
  }

  list(): CardItem[] {
    return CardItems;
  }
}
