import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {DialogService} from "../../../shared/dialog/services/dialog.service";
import {DialogFactoryService} from "../../../shared/dialog/services/dialog-factory.service";
import {POPUP_WIDTH} from "../../../core/constants/popups";

@Component({
  selector: 'app-second-pillar',
  templateUrl: './second-pillar.component.html',
  styleUrls: ['./second-pillar.component.scss']
})
export class SecondPillarComponent implements OnInit {

  public dialog: DialogService;

  @ViewChild('secondPillarInfoPopupTemplate', {static: false}) secondPillarInfoPopupTemplate: TemplateRef<any>;

  constructor(
    private dialogFactoryService: DialogFactoryService
  ) { }

  ngOnInit(): void {
  }

  public openPopup(): void {
    this.dialog = this.dialogFactoryService.open({
      headerText: '',
      template: this.secondPillarInfoPopupTemplate
    }, {
      width: POPUP_WIDTH,
      height: '456px'
    });
  }
}
