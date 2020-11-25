import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RadioButtonComponent } from './radio-button.component';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [RadioButtonComponent],
  exports: [RadioButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatRadioModule,
  ]
})
export class RadioButtonModule {}
