import { Component, ElementRef } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent {
  constructor(private cardService: CardsService) {}

  elements = this.cardService.elements;
}
