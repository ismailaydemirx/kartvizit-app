import { Component } from '@angular/core';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrl: './card-search.component.scss',
})
export class CardSearchComponent {
  constructor(private cardService: CardService) {}
  search(searchText: string): void {
    searchText = searchText.toLocaleLowerCase();

    this.cardService.filteredCards = this.cardService.cards.filter((card) => {
      return (
        card.title.toLocaleLowerCase().indexOf(searchText) > -1 ||
        (card.name && card.name?.toLocaleLowerCase().indexOf(searchText) > -1)
      ); // her bir card değişkeninin içindeki title'i lowerCase yapıyor daha sonra indexOf ile searchText'den gelen input'u title içerisinde arıyor eğer varsa 0 veya üzeri bir index değeri alıyor.
    });
  }
}
