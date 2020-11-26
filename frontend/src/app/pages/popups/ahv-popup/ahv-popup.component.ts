import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DialogService} from "../../../shared/dialog/services/dialog.service";

@Component({
  selector: 'app-ahv-popup',
  templateUrl: './ahv-popup.component.html',
  styleUrls: ['./ahv-popup.component.scss']
})
export class AhvPopupComponent implements OnInit {

  @Input() dialog: DialogService;
  @Output() closeDialog: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
