import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    MatButtonModule,
    MatDialogModule,
    PerfectScrollbarModule,
    MatProgressSpinnerModule
  ],
  exports: [DialogComponent],
  declarations: [DialogComponent],
  entryComponents: [DialogComponent]
})
export class DialogModule {}
