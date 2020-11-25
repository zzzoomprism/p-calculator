import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { first } from 'rxjs/operators';
import { DialogComponent } from '../dialog.component';
import { DialogData } from '../models/dialog-data.model';
import { DialogOptions } from '../models/dialog-options.model';
import { DialogService } from './dialog.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { SMALL } from '../../../core/constants/breakpoints';

const DEFAULT_OPTIONS: DialogOptions = {
  width: '500px',
  height: 'unset',
  mobileHeight: '355px',
  mobileWidth: '355px',
  panelClass: 'dialog',
  maxHeight: 'calc(100% - 20px)',
  maxWidth: 'calc(100% - 20px)'
};

@Injectable({
  providedIn: 'root'
})
export class DialogFactoryService<T = undefined> {
  constructor(private dialog: MatDialog,  private deviceService: DeviceDetectorService) {
  }

  open(dialogData: DialogData<T>, options?: DialogOptions): DialogService<T> {
    let tempOptions: DialogOptions = DEFAULT_OPTIONS;
    if (options) {
      tempOptions = {
        ...tempOptions,
        ...options
      };
    }

    if (window.innerWidth <= SMALL) {
      tempOptions.width = tempOptions.mobileWidth;
      tempOptions.height = tempOptions.mobileHeight;
    }

    const dialogRef = this.dialog.open<DialogComponent<T>, DialogData<T>>(
      DialogComponent,
      {
        ...tempOptions,
        data: dialogData
      }
    );

    dialogRef.afterClosed().pipe(first());

    return new DialogService(dialogRef);
  }
}
