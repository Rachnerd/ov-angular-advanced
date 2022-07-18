import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

export type SupportedIcon =
  | 'cart-plus'
  | 'star'
  | 'star-half-o'
  | 'star-o'
  | 'envelope'
  | 'trash';

export type SupportedColor =
  | 'primary'
  | 'secondary'
  | 'ok'
  | 'error'
  | 'none'
  | 'white';

export type SupportedSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

@Component({
  selector: 'ov-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent implements OnInit {
  @Input() icon!: SupportedIcon;
  @Input() color?: SupportedColor = 'primary';
  @Input() size?: SupportedSize = 'md';

  constructor() {}

  ngOnInit(): void {}
}
