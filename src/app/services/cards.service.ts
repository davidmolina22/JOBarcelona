import { Injectable } from '@angular/core';
import { Card, Tag } from '../interfaces/card.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private tags: Tag[] = [
    { name: 'Deportes de riesgo' },
    { name: 'Libros' },
    { name: 'Family' },
    { name: 'Sport' },
  ];

  private _elements: Card[] = [
    {
      title: 'Crew',
      description: 'Lista de regalos para el grupo ',
      tags: [this.tags[0], this.tags[1]],
    },
    {
      title: 'Family',
      description: 'Lista de regalos para el grupo ',
      tags: [this.tags[2], this.tags[3]],
    },
    {
      title: 'Otros',
      description: 'Lista de regalos para el grupo ',
      tags: [this.tags[2], this.tags[1]],
    },
    {
      title: 'Crew',
      description: 'Lista de regalos para el grupo ',
      tags: [this.tags[0], this.tags[1]],
    },
    {
      title: 'Family',
      description: 'Lista de regalos para el grupo ',
      tags: [this.tags[2], this.tags[3]],
    },
    {
      title: 'Otros',
      description: 'Lista de regalos para el grupo ',
      tags: [this.tags[2], this.tags[1]],
    },
  ];

  get elements() {
    return this._elements;
  }
}
