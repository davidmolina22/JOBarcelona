import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'group-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent implements OnInit {
  constructor() {}
  @Input() tag!: string;

  ngOnInit(): void {}
}
