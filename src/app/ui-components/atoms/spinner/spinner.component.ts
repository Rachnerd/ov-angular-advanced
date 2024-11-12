import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ov-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  @Input() text = '';

  constructor() {}

  ngOnInit(): void {}
}
