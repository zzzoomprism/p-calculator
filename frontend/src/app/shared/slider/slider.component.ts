import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit{

  @Input() public max: number;
  @Input() public min: number;
  @Input() public value: number;
  @Input() public title: string;
  @Input() public step: number;
  @Input() public metric = 'CHF';
  @Input() public isHelp: boolean = false;
  @Input() public isDisabled = false;
  @Input() public isCanEnterValue = true;
  @Output() public valueChanged: EventEmitter<number> = new EventEmitter<number>();
  @Output() public isOpenPopup: EventEmitter<boolean> = new EventEmitter<boolean>();

  public inputValue: string;

  get maxLength() {
    return `${this.max}`.length;
  }

  constructor( ) {
  }

  ngOnInit() {
  }

  public changeSlider(e) {;
    this.valueChanged.emit(e.value);
  }

  keypress(event) {
    const key = event.key;
    const regex = /[0-9]/;
    return regex.test(key);
  }

  public focus() {
    this.inputValue = `${this.value}`;
  }

  public blur() {
  }

  public changeInputValue(value: string): void {
    const tempValue = Number(value);
    if (tempValue > this.max) {
      this.valueChanged.emit(this.max);
      return;
    }

    if (tempValue < this.min) {
      this.valueChanged.emit(this.min);
      return;
    }
    this.valueChanged.emit(tempValue);
  }

  public openPopup(): void {
    this.isOpenPopup.emit(true);
  }
}
