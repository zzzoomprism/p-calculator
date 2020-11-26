import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DialogService} from "../../../shared/dialog/services/dialog.service";

@Component({
  selector: 'app-reinvestment-info-popup',
  templateUrl: './reinvestment-info-popup.component.html',
  styleUrls: ['./reinvestment-info-popup.component.scss']
})
export class ReinvestmentInfoPopupComponent implements OnInit {

  @Input() dialog: DialogService;
  @Output() closeDialog: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
