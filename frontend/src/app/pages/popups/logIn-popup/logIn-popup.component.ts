import {Component, EventEmitter, OnInit, Output, Input, TemplateRef, ViewChild, ChangeDetectorRef} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService } from '../../../shared/dialog/services/dialog.service';
import { DialogFactoryService } from 'src/app/shared/dialog/services/dialog-factory.service';
import { Observable, timer } from 'rxjs';
import { map, scan, takeWhile } from 'rxjs/operators';
import { POPUP_WIDTH, POPUP_HEIGHT } from '../../../core/constants/popups';

@Component({
  selector: 'app-logIn-popup',
  templateUrl: './logIn-popup.component.html',
  styleUrls: ['./logIn-popup.component.scss'],
})

export class LogInPopupComponent implements OnInit {

  @ViewChild('forgotPasswordPopupTemplate', {static: false}) forgotPasswordPopupTemplate: TemplateRef<any>;

  @Input() dialog: DialogService;
  @Output() closeDialog: EventEmitter<boolean> = new EventEmitter<boolean>();

  public userForm: FormGroup;
  public passwordVisible = true;
  public passwordInputType = 'password';
  public firstLogInStage = true;
  public smsCode: string;
  public colorInOTP = '#FFF';
  public borderInOTP = '1px solid #ffffff';
  public isTimerOff = true;
  public countdown: Observable<string>;
  public isNextBtnDisabled = true;
  public isCodeWrong = false;
  public userPhoneNumber: any;
  public isActiveErrorStyle = false;
  public isLoadingUserData = false;
  public currentLanguage: string;
  private REG_EXP_EMAIL = '^([a-zA-Z0-9_-]+\\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\\.[a-z0-9_-]+)*\\.[a-z]{2,6}$';

  constructor(
    private formBuilder: FormBuilder,
    private dialogFactoryService: DialogFactoryService) {
    }


  public get email(): FormControl {
    return this.userForm.get('email') as FormControl;
  }

  public get password(): FormControl {
    return this.userForm.get('password') as FormControl;
  }

  public makePasswordVisible(): void {
    this.passwordVisible = !this.passwordVisible;
    if (this.passwordInputType === 'password') {
      this.passwordInputType = 'text';
    } else {
      this.passwordInputType = 'password';
    }
  }


  ngOnInit() {
    this.currentLanguage = localStorage.getItem('language');
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.REG_EXP_EMAIL)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

    this.userForm.valueChanges.subscribe(
      () => {
        this.isActiveErrorStyle = false;
        this.isNextBtnDisabled = !this.userForm.valid;
      }
    );
  }
}



