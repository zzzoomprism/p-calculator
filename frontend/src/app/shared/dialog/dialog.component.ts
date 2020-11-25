import { AfterViewInit, ChangeDetectionStrategy, Component, Inject, TemplateRef, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent<T> implements AfterViewInit {

  @ViewChild('scroll', {static: true}) scroll: PerfectScrollbarComponent;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent<T>>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      headerText: string;
      isHideDialogClose: boolean;
      template: TemplateRef<any>;
      context: T;
    }
  ) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.scroll.directiveRef.update();
    }, 180);
  }
}
