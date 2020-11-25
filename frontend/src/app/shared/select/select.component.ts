import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';
import { FormControl } from '@angular/forms';

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
  @Input() public selectedValue: string | number | boolean = "DE";
  @Output() selectValue: EventEmitter<ISelect> = new EventEmitter<ISelect>();

  @ViewChild('matSelect', {static: false}) matSelect: MatSelect;
  @ViewChild('scroll', {static: false}) scroll: PerfectScrollbarComponent;
  public language = new FormControl();
  public languagesList: ISelect[] = [
    {shortValue: "DE", title: "Deutsch", value: "DE" },
    {shortValue: "FR", title: "Français", value: "FR" },
    {shortValue: "IT", title: "Italiano", value: "IT" },
    {shortValue: "EN", title: "English", value: "EN" },
  ]
  ngAfterViewInit(): void {
  }
  get shortValue(): string {
    const selectedItem = this.languagesList.find((item) => this.selectedValue === item.value);
    return selectedItem.shortValue;
  }

  select() {
    const selectedItem = this.languagesList.find((item) => this.selectedValue === item.value);
    this.selectValue.emit(selectedItem);
  }
}
