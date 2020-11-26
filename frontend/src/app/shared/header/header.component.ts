import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DialogService } from '../dialog/services/dialog.service';
import { DialogFactoryService } from 'src/app/shared/dialog/services/dialog-factory.service';
import { POPUP_WIDTH, POPUP_HEIGHT } from '../../core/constants/popups';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public dialog: DialogService;
  constructor(
    private dialogFactoryService: DialogFactoryService ) {}

  @ViewChild('logInPopupTemplate', {static: false}) logInPopupTemplate: TemplateRef<any>;

  ngOnInit(): void {}
  public openLogInPopup(): void {
    this.dialog = this.dialogFactoryService.open({
      headerText: '',
      template: this.logInPopupTemplate
    }, {
      width: POPUP_WIDTH,
      height: '467px'
    });
  }
}
