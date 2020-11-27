import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DialogService} from "../../../shared/dialog/services/dialog.service";

@Component({
  selector: 'app-second-pillar-info-popup',
  templateUrl: './second-pillar-info-popup.component.html',
  styleUrls: ['./second-pillar-info-popup.component.scss']
})
export class SecondPillarInfoPopupComponent implements OnInit {

  @Input() dialog: DialogService;
  @Output() closeDialog: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
