import { TemplateRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { first } from 'rxjs/operators';
import { DialogComponent } from '../dialog.component';

type DialogRef<T> = MatDialogRef<DialogComponent<T>>;

export class DialogService<T = undefined> {
  opened$ = this.dialogRef.afterOpened().pipe(first());

  constructor(private dialogRef: DialogRef<T>) {}

  get context() {
    return this.dialogRef.componentInstance.data.context;
  }

  close() {
    this.dialogRef.close();
  }

  setHeaderText(headerText: string): void {
    this.dialogRef.componentInstance.data.headerText = headerText;
  }

  setHideIcon(isHideDialogClose: boolean): void {
    this.dialogRef.componentInstance.data.isHideDialogClose = isHideDialogClose;
  }

  setTemplate(template: TemplateRef<any>): void {
    this.dialogRef.componentInstance.data.template = template;
  }

  open(childModal: any, param2: {panelClass: string}) {
    return undefined;
  }
}
