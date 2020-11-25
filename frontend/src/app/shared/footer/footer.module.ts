import { NgModule } from '@angular/core';
import { FooterComponent} from './footer.component';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { SelectModule } from "../select/select.module";
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  declarations: [
    FooterComponent
  ],
  exports: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    SelectModule,
    AppRoutingModule,
    RouterModule
  ],
})
export class FooterModule {
}
