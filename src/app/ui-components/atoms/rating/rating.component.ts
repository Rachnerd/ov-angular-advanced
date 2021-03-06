import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'ov-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingComponent implements OnInit {
  @Input() rate!: number;
  @Input() count!: number;

  ngOnInit(): void {}
}
