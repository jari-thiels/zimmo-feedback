import { Component, forwardRef, Input } from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

@Component({
  selector: "app-rating",
  templateUrl: "./rating.component.html",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingComponent),
      multi: true,
    },
  ],
})
export class RatingComponent implements ControlValueAccessor {
  @Input() disabled = false;

  // Rating number assigned from 1(🙁) to 5(😀)
  value: number;

  onChange: any = () => {};
  onTouched: any = () => {};

  onRatingSelect(value: number): void {
    if (this.disabled) {
      return;
    }

    this.value = value;
    this.onChange(value);
  }

  // programmatically writing the value
  writeValue(value: any) {
    this.value = value;
  }
  // method to be triggered on UI change
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  // method to be triggered on component touch
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
  // method to be triggered when control gets disabled
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}
