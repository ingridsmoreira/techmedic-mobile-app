import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  forwardRef,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.sass'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputFieldComponent),
    },
  ],
})
export class InputFieldComponent implements ControlValueAccessor {
  @Input() appearance: MatFormFieldAppearance = 'fill';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'teste';
  @Input() value: string = '';
  @Input() required: boolean = false;
  @Input() icon: string = '';
  @Input() iconFrente: boolean = true;
  @Input() isRedondo: boolean = false;
  @Input() isLowerCase: boolean = false;
  touched = false;
  disabled = false;

  constructor() {}

  onChange = (value: any) => {
    this.value = value;
  };
  onTouched = () => {};
  ngOnInit(): void {}

  onInput(event: any) {
    this.value = event.target.value;
    this.onChange(this.value);
  }

  writeValue(value: string) {
    this.value = value;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  validateRequired(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value.length < 1) {
      return {
        required: {
          valid: false,
        },
      };
    }
    return null;
  }
}
