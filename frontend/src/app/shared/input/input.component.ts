import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent {

  @Input() label: string;
  @Input() errorLabel: string;
  @Input() isInvalid = false;
  @Input() value: any;
  @Input() inputType = 'text';
  @Input() readonly = false;
  @Input() placeholder: string;

  public get noValidation(): boolean {
    return typeof this.isInvalid === 'undefined';
  }

  writeValue(value: boolean): void {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  onChange(): void {
    this.propagateChange(this.value);
  }

  registerOnTouched() {}

  private propagateChange = (_: any) => {};
}
