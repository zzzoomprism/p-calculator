import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SliderComponent } from './slider.component';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SliderComponent],
  exports: [SliderComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    MatSliderModule,
    FormsModule
  ],
  providers: [

  ]
})
export class SliderModule {}
