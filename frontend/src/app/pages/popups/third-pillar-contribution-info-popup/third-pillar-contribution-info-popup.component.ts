import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DialogService} from "../../../shared/dialog/services/dialog.service";

@Component({
  selector: 'app-third-pillar-contribution-info-popup',
  templateUrl: './third-pillar-contribution-info-popup.component.html',
  styleUrls: ['./third-pillar-contribution-info-popup.component.scss']
})
export class ThirdPillarContributionInfoPopupComponent implements OnInit {

  @Input() dialog: DialogService;
  @Output() closeDialog: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
