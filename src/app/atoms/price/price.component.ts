import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ov-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss'],
})
export class PriceComponent implements OnInit {
  @Input() amount!: number;

  constructor() {}

  ngOnInit(): void {}
}
