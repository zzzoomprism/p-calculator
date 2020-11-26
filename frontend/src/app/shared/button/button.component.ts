import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() disabled = false;
  @Input() gtmId;
  @Input() title: string;
  @Input() color;
  @Input() img: string;
  @Input() isFull = false;
  @Output() buttonClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }
  ngOnInit() {
  }
  public buttonClicked() {
    if (!this.disabled) {
      this.buttonClick.emit(true);
    }
  }
}
