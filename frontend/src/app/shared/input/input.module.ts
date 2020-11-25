import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { InputComponent } from './input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputComponent],
  exports: [InputComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    FormsModule,
  ]
})
export class InputModule {}
