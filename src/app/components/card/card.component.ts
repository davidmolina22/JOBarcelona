import { Component, Input, OnInit } from '@angular/core';
import { Tag } from 'src/app/interfaces/card.interfaces';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor() {}

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() tags: Tag[] = [];
  click: boolean = false;

  ngOnInit(): void {}

  changeClicked() {
    this.click = !this.click
  }
}
