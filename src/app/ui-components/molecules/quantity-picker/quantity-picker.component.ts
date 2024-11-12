import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { QuantityValidator } from './shared/quantity.validator';

export interface Quantity {
  min: number;
  step: number;
  max: number;
}

@Component({
  selector: 'ov-quantity-picker',
  templateUrl: './quantity-picker.component.html',
  styleUrls: ['./quantity-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuantityPickerComponent implements OnInit {
  @Input() quantity!: Quantity;

  @Input() showInput = false;

  @Output() selectQuantity = new EventEmitter<number>();

  /**
   * The input ViewChild is conditionally rendered so a setter is required to detect its activation.
   */
  @ViewChild('input', { static: false, read: ElementRef }) set input(element: {
    nativeElement: HTMLInputElement;
  }) {
    /**
     * When the input appears we need to focus the input and select the current value.
     */
    if (element) {
      element.nativeElement.focus();
      element.nativeElement.select();
    }
  }

  quantityFormControl!: UntypedFormControl;

  ngOnInit(): void {
    this.quantityFormControl = new UntypedFormControl(this.quantity.min, [
      Validators.required,
      /**
       * Custom validator to check if the quantity meets the step requirement.
       */
      QuantityValidator(this.quantity.step),
    ]);
  }

  submitQuantity() {
    this.selectQuantity.emit(parseInt(this.quantityFormControl.value));
  }

  selectChangeQuantity(event: Event) {
    const { value } = event.target as HTMLSelectElement;
    if (value === 'More') {
      this.showInput = true;
    } else {
      this.quantityFormControl.setValue(value);
    }
  }
}
