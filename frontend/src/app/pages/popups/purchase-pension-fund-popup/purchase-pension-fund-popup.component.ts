import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DialogService} from "../../../shared/dialog/services/dialog.service";

@Component({
  selector: 'app-purchase-pension-fund-popup',
  templateUrl: './purchase-pension-fund-popup.component.html',
  styleUrls: ['./purchase-pension-fund-popup.component.scss']
})
export class PurchasePensionFundPopupComponent implements OnInit {

  @Input() dialog: DialogService;
  @Output() closeDialog: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
