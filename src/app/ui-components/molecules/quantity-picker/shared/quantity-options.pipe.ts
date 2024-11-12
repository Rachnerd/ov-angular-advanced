import { Pipe, PipeTransform } from '@angular/core';
import { Quantity } from '../quantity-picker.component';

const MAX_AMOUNT_OF_OPTIONS = 8;

export type Option = number | 'More';

@Pipe({
  name: 'quantityOptions',
})
export class QuantityOptionsPipe implements PipeTransform {
  transform({ min, max, step }: Quantity): Option[] {
    const options: Option[] = [];
    for (let i = min; i <= max; i += step) {
      options.push(i);
      if (options.length >= MAX_AMOUNT_OF_OPTIONS) {
        break;
      }
    }
    if ((options[options.length - 1] as number) < max) {
      options.push('More');
    }
    return options;
  }
}
