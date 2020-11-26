import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DialogService} from "../../../shared/dialog/services/dialog.service";

@Component({
  selector: 'app-verified-user-popup',
  templateUrl: './verified-user-popup.component.html',
  styleUrls: ['./verified-user-popup.component.scss']
})
export class VerifiedUserPopupComponent implements OnInit {

  @Input() dialog: DialogService;
  @Output() closeDialog: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
