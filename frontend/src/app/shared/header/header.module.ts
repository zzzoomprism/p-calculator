import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { SelectModule } from "../select/select.module";
import { LogInPopupComponent } from '../../pages/popups/logIn-popup/logIn-popup.component';
import { InputModule } from '../input/input.module';
import { ButtonModule } from '../button/button.module';
import { NgOtpInputModule } from 'ng-otp-input';
import {StayInformedPopupComponent} from "../../pages/popups/stay-informed-popup/stay-informed-popup.component";
import {StayInformedSuccessPopupComponent} from "../../pages/popups/stay-informed-success-popup/stay-informed-success-popup.component";
import {AhvPopupComponent} from "../../pages/popups/ahv-popup/ahv-popup.component";
import {PurchasePensionFundPopupComponent} from "../../pages/popups/purchase-pension-fund-popup/purchase-pension-fund-popup.component";
import {ThirdPillarInfoPopupComponent} from "../../pages/popups/third-pillar-info-popup/third-pillar-info-popup.component";
import {ThirdPillarContributionInfoPopupComponent} from "../../pages/popups/third-pillar-contribution-info-popup/third-pillar-contribution-info-popup.component";
import {ReinvestmentInfoPopupComponent} from "../../pages/popups/reinvestment-info-popup/reinvestment-info-popup.component";
import {VerifiedUserPopupComponent} from "../../pages/popups/verified-user-popup/verified-user-popup.component";

@NgModule({
  declarations: [
    HeaderComponent,
    LogInPopupComponent,
    StayInformedPopupComponent,
    StayInformedSuccessPopupComponent,
    AhvPopupComponent,
    PurchasePensionFundPopupComponent,
    ThirdPillarInfoPopupComponent,
    ThirdPillarContributionInfoPopupComponent,
    ReinvestmentInfoPopupComponent,
    VerifiedUserPopupComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    SelectModule,
    InputModule,
    ButtonModule,
    NgOtpInputModule
  ],
})
export class HeaderModule {
}
