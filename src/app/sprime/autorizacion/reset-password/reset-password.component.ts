import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { GeneralComponent } from 'src/app/comun/general-component/general.component';
import { ResetPasswordService } from '../services/reset-password.service';
import { LoginDataService } from '../services/login-data.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent extends GeneralComponent implements OnInit,OnDestroy {


  public viewConfirm1: boolean = false;
  public viewConfirm2: boolean = false;
  public viewConfirm3: boolean = false;
  passwordReset: boolean = false;

  formPasswordReset!: FormGroup;

  passwordPattern = new RegExp("^(?=.*[^A-Za-z0-9]{1}.*)(?=.*[0-9]{1}.*[0-9]{1}.*[0-9]{1}.*)(?=.*[A-Za-z]{1}.*[A-Za-z]{1}.*[A-Za-z]{1}.*[A-Za-z]{1}.*[A-Za-z]{1}.*[A-Za-z]{1}.*).*$");


  constructor(
    private formBuilder: FormBuilder,
    private loginDataService :LoginDataService,
    private resetPasswordService : ResetPasswordService
  ) {
    super();
  }

  ngOnInit(): void {
   
    let curp = this.loginDataService.getLoginCurp();

    if(!curp)
      this._router.navigate(['/', 'login', { outlets: { 'base': [] } } ,]);

    this.formPasswordReset = this.formBuilder.group({
      curp:['', [Validators.required]],
      newPassword: ['', [Validators.required
        , Validators.maxLength(10)
        ,Validators.pattern(this.passwordPattern)
    ]],
      passwordConfirm: ['', [Validators.required
        , Validators.maxLength(10)
        ,Validators.pattern(this.passwordPattern)
      ,this.shouldMatchNewPassword()]]
    });

    this.formPasswordReset.get('curp').setValue(curp);
    this.formPasswordReset.get('curp').disable();
   
  }

  override ngOnDestroy(){
    this.loginDataService.deleteLoginCurp();
  }

  validateForm(){
    this.formPasswordReset.get('newPassword').updateValueAndValidity();
    this.formPasswordReset.get('passwordConfirm').updateValueAndValidity();
  }

  updatePassword(){

    let curp = this.formPasswordReset.get('curp').value;
    let password = this.formPasswordReset.get('passwordConfirm').value;

    this.resetPasswordService.updatePassword(curp, password).then(resp => {
      this._router.navigate(['/', 'login', {message: resp.mensaje }, { outlets: { 'base': [] } } ,]);
    });
  }

  shouldBeNew(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {
  
        const value = control.value;
  
        if (!value) {
            return null;
        }
  
        const passwordValid = value == this.formPasswordReset.get('oldPassword').value;
  
        return passwordValid ? {isNotNew:true}: null;
    }
  }

  shouldMatchNewPassword(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {
  
        const value = control.value;
        
  
        if (!value) {
            return null;
        }
  
        const passwordValid = value == this.formPasswordReset.get('newPassword').value;
  
        return !passwordValid ? {notMatching:true}: null;
    }
  }


}


