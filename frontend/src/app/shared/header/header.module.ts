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

@NgModule({
  declarations: [
    HeaderComponent,
    LogInPopupComponent
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
