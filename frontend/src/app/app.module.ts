import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './shared/header/header.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { HomeDesktopComponent } from './pages/home/home-desktop/home-desktop.component';
import { InputModule } from "./shared/input/input.module";
import { SelectModule } from './shared/select-border/select.module';
import { RadioButtonModule } from './shared/radio-button/radio-button.module';
import { SliderModule } from './shared/slider/slider.module';
import { TermsComponent } from './pages/terms/terms.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { KeenComponent } from './pages/keen/keen.component';
import { FooterModule } from './shared/footer/footer.module';
import { ButtonModule } from './shared/button/button.module';
import { PersonalInformationComponent } from './pages/questionnaire/personal-information/personal-information.component';
import { DialogModule } from './shared/dialog/dialog.module';
import { FormsModule } from '@angular/forms';
import { NgOtpInputModule } from 'ng-otp-input';
import { BarChartModule } from './shared/bar-chart/bar-chart.module';
import { IncomeGrossComponent } from './pages/questionnaire/income-gross/income-gross.component';
import { StartModule } from './pages/questionnaire/start.module';
import {SecondPillarComponent} from "./pages/questionnaire/second-pillar/second-pillar.component";
import {SecondPillarInfoPopupComponent} from "./pages/popups/second-pillar-info-popup/second-pillar-info-popup.component";
import {AdditionalComponent} from "./pages/questionnaire/additional/additional.component";
import {ThirdPillarComponent} from "./pages/questionnaire/third-pillar/third-pillar.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeDesktopComponent,
    TermsComponent,
    PrivacyPolicyComponent,
    KeenComponent,
    PersonalInformationComponent,
    IncomeGrossComponent,
    SecondPillarComponent,
    ThirdPillarComponent,
    AdditionalComponent,
    SecondPillarInfoPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    BrowserAnimationsModule,
    PerfectScrollbarModule,
    InputModule,
    SelectModule,
    RadioButtonModule,
    SliderModule,
    FooterModule,
    ButtonModule,
    DialogModule,
    FormsModule,
    NgOtpInputModule,
    BarChartModule,
    StartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
