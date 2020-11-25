import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { MatSelect } from '@angular/material/select';
import { PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';

export interface ISelect {
  value: string | number | boolean;
  title: string;
  shortValue?: string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent implements AfterViewInit {

  @Input() isActive = true;
  @Input() isBorderShow = true;
  @Input() list: ISelect[] = [];
  @Input() isShortSelectTitle = false;
  @Input() public selectedValue: string | number | boolean;
  @Output() selectValue: EventEmitter<ISelect> = new EventEmitter<ISelect>();

  @ViewChild('matSelect', {static: false}) matSelect: MatSelect;
  @ViewChild('scroll', {static: false}) scroll: PerfectScrollbarComponent;

  get isShortList(): boolean {
    return this.list.length <= 5;
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (this.matSelect.panelOpen && !this.deviceDetectorService.isMobile() && !this.isShortList) {
      setTimeout(() => {
        const activeOption = this.matSelect.options.find((option) => option.active);
        if (!activeOption) {
          return;
        }

        const index = this.list.findIndex((item) => item.value === activeOption.value);
        if (index === -1) {
          return;
        }
      }, 400);
    }
  }

  ngAfterViewInit() {

    if (this.deviceDetectorService.isMobile() || this.isShortList) {
      return;
    }

    this.matSelect._openedStream.subscribe(() => {
      const selectedOption: any = this.matSelect.selected;
    });
  }

  get shortValue(): string {
    const selectedItem = this.list.find((item) => this.selectedValue === item.value);
    return selectedItem.shortValue;
  }

  constructor(public deviceDetectorService: DeviceDetectorService) {
  }

  public select(): void {
    const selectedItem = this.list.find((item) => this.selectedValue === item.value);
    this.selectValue.emit(selectedItem);
  }
}
