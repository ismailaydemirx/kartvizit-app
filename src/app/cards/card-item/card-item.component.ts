import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.scss',
})
export class CardItemComponent implements OnInit {

  @Input() card!: Card;

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
