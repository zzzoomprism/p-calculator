import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './shared/header/header.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { HomeDesktopComponent } from './pages/home-desktop/home-desktop.component';
import { InputModule } from "./shared/input/input.module";
import { SelectModule } from './shared/select-border/select.module';
import { RadioButtonModule } from './shared/radio-button/radio-button.module';
import { SliderModule } from './shared/slider/slider.module';
import { TermsComponent } from './pages/terms/terms.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { KeenComponent } from './pages/keen/keen.component';
import { FooterModule } from './shared/footer/footer.module';
import { ButtonModule } from './shared/button/button.module';
import { LogInPopupComponent } from './pages/popups/logIn-popup/logIn-popup.component';
import { DialogModule } from './shared/dialog/dialog.module';
import { FormsModule } from '@angular/forms';
import { NgOtpInputModule } from 'ng-otp-input';

@NgModule({
  declarations: [
    AppComponent,
    HomeDesktopComponent,
    TermsComponent,
    PrivacyPolicyComponent,
    KeenComponent,
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
    NgOtpInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
