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
    let item = CardItems.find((c) => c.product.productId === product.productId);
    if (item) {
      item.quantity += 1;
    } else {
      let cardItem = new CardItem();
      cardItem.product = product;
      cardItem.quantity = 1;
      CardItems.push(cardItem);
    }
  }

  removeFromCard(product: Product) {
    let item = CardItems.find((c) => c.product.productId === product.productId);
    CardItems.splice(CardItems.indexOf(item), 1);
  }

  list(): CardItem[] {
    return CardItems;
  }
}
