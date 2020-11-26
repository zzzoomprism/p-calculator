import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DialogService} from "../../../shared/dialog/services/dialog.service";
import {DialogFactoryService} from "../../../shared/dialog/services/dialog-factory.service";

@Component({
  selector: 'app-stay-informed-success-popup',
  templateUrl: './stay-informed-success-popup.component.html',
  styleUrls: ['./stay-informed-success-popup.component.scss']
})
export class StayInformedSuccessPopupComponent implements OnInit {

  @Input() dialog: DialogService;
  @Output() closeDialog: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private dialogFactoryService: DialogFactoryService) { }

  ngOnInit(): void {
  }

}
