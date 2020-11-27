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
  @ViewChild('stayInformedPopupTemplate', {static: false}) stayInformedPopupTemplate: TemplateRef<any>;
  @ViewChild('stayInformedSuccessPopupTemplate', {static: false}) stayInformedSuccessPopupTemplate: TemplateRef<any>;
  @ViewChild('ahvPopupTemplate', {static: false}) ahvPopupTemplate: TemplateRef<any>;
  @ViewChild('purchasePensionFundPopupTemplate', {static: false}) purchasePensionFundPopupTemplate: TemplateRef<any>;
  @ViewChild('thirdPillarInfoPopupTemplate', {static: false}) thirdPillarInfoPopupTemplate: TemplateRef<any>;
  @ViewChild('thirdPillarContributionInfoPopupTemplate', {static: false}) thirdPillarContributionInfoPopupTemplate: TemplateRef<any>;
  @ViewChild('reinvestmentInfoPopupTemplate', {static: false}) reinvestmentInfoPopupTemplate: TemplateRef<any>;
  @ViewChild('verifiedUserPopupTemplate', {static: false}) verifiedUserPopupTemplate: TemplateRef<any>;


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

  //unused popup functions

  public openAhvPopup(): void {
    this.dialog = this.dialogFactoryService.open({
      headerText: '',
      template: this.ahvPopupTemplate
    }, {
      width: POPUP_WIDTH,
      height: '536px'
    });
  }

  public openPurchasePensionFundPopup(): void {
    this.dialog = this.dialogFactoryService.open({
      headerText: '',
      template: this.purchasePensionFundPopupTemplate
    }, {
      width: POPUP_WIDTH,
      height: '632px'
    });
  }

  public openThirdPillarInfoPopup(): void {
    this.dialog = this.dialogFactoryService.open({
      headerText: '',
      template: this.thirdPillarInfoPopupTemplate
    }, {
      width: POPUP_WIDTH,
      height: '656px'
    });
  }

  public openThirdPillarContributionInfoPopup(): void {
    this.dialog = this.dialogFactoryService.open({
      headerText: '',
      template: this.thirdPillarContributionInfoPopupTemplate
    }, {
      width: POPUP_WIDTH,
      height: '528px'
    });
  }

  public openReinvestmentInfoPopup(): void {
    this.dialog = this.dialogFactoryService.open({
      headerText: '',
      template: this.reinvestmentInfoPopupTemplate
    }, {
      width: POPUP_WIDTH,
      height: '552px'
    });
  }

  public openVerifiedUserPopup(): void {
    this.dialog = this.dialogFactoryService.open({
      headerText: '',
      template: this.verifiedUserPopupTemplate
    }, {
      width: POPUP_WIDTH,
      height: '288px'
    });
  }

  //unused popup functions
}
