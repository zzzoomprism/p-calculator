import { TemplateRef } from '@angular/core';

export interface DialogData<T = undefined> {
  headerText: string;
  isHideDialogClose?: boolean;
  template: TemplateRef<any>;
  context?: T;
}
