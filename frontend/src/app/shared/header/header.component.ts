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
    private dialogFactoryService: DialogFactoryService
                ) {}

  @ViewChild('logInPopupTemplate', {static: false}) logInPopupTemplate: TemplateRef<any>;
  @ViewChild('stayInformedPopupTemplate', {static: false}) stayInformedPopupTemplate: TemplateRef<any>;
  @ViewChild('stayInformedSuccessPopupTemplate', {static: false}) stayInformedSuccessPopupTemplate: TemplateRef<any>;

  ngOnInit(): void {
  }
  public openLogInPopup(): void {
    this.dialog = this.dialogFactoryService.open({
      headerText: '',
      template: this.logInPopupTemplate
    }, {
      width: POPUP_WIDTH,
      height: '467px'
    });
  }

  public openStayInformedPopup(): void {
    this.dialog = this.dialogFactoryService.open({
      headerText: '',
      template: this.stayInformedPopupTemplate
    }, {
      width: POPUP_WIDTH,
      height: '760px'
    });
  }

  public openStayInformedSuccessPopup(): void {

    this.dialog = this.dialogFactoryService.open({
      headerText: '',
      template: this.stayInformedSuccessPopupTemplate
    }, {
      width: POPUP_WIDTH,
      height: '456px'
    });
  }
}
