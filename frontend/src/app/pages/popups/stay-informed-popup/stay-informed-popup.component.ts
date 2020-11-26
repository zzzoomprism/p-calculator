import {Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {DialogService} from "../../../shared/dialog/services/dialog.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {DialogFactoryService} from "../../../shared/dialog/services/dialog-factory.service";

@Component({
  selector: 'app-stay-informed-popup',
  templateUrl: './stay-informed-popup.component.html',
  styleUrls: ['./stay-informed-popup.component.scss']
})
export class StayInformedPopupComponent implements OnInit {

  @Input() dialog: DialogService;
  @Output() closeDialog: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() openSuccess: EventEmitter<boolean> = new EventEmitter<boolean>();

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

  public get firstName(): FormControl {
    return this.userForm.get('firstName') as FormControl;
  }

  public get secondName(): FormControl {
    return this.userForm.get('secondName') as FormControl;
  }

  public get email(): FormControl {
    return this.userForm.get('email') as FormControl;
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      secondName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(this.REG_EXP_EMAIL)]]
    });

    this.userForm.valueChanges.subscribe(
      () => {
        this.isActiveErrorStyle = false;
        this.isNextBtnDisabled = !this.userForm.valid;
      }
    );
  }

  public openSuccessPopup() {
    this.openSuccess.emit(true);
  }

}
