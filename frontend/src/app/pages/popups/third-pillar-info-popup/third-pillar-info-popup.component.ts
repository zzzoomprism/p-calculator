import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DialogService} from "../../../shared/dialog/services/dialog.service";

@Component({
  selector: 'app-third-pillar-info-popup',
  templateUrl: './third-pillar-info-popup.component.html',
  styleUrls: ['./third-pillar-info-popup.component.scss']
})
export class ThirdPillarInfoPopupComponent implements OnInit {

  @Input() dialog: DialogService;
  @Output() closeDialog: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
