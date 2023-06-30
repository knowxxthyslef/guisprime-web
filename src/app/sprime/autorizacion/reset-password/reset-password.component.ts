import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { GeneralComponent } from 'src/app/comun/general-component/general.component';
import { ResetPasswordService } from '../services/reset-password.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent extends GeneralComponent implements OnInit {


  public viewConfirm1: boolean = false;
  public viewConfirm2: boolean = false;
  public viewConfirm3: boolean = false;
  passwordReset: boolean = false;

  formPasswordReset!: FormGroup;

  passwordPattern = new RegExp("^(?=.*[^A-Za-z0-9]{1}.*)(?=.*[0-9]{1}.*[0-9]{1}.*[0-9]{1}.*)(?=.*[A-Za-z]{1}.*[A-Za-z]{1}.*[A-Za-z]{1}.*[A-Za-z]{1}.*[A-Za-z]{1}.*[A-Za-z]{1}.*).*$");


  constructor(
    private formBuilder: FormBuilder,
    private resetPasswordService : ResetPasswordService
  ) {
    super();
  }

  ngOnInit(): void {
   

    this.formPasswordReset = this.formBuilder.group({
      curp:['', [Validators.required, 
        Validators.maxLength(18), 
        Validators.pattern(this.curpPattern)]],
      oldPassword: ['', [Validators.required, Validators.maxLength(10),Validators.pattern(this.passwordPattern)]],
      newPassword: ['', [Validators.required
        , Validators.maxLength(10)
        ,Validators.pattern(this.passwordPattern)
      ,this.shouldBeNew() 
    ]],
      passwordConfirm: ['', [Validators.required
        , Validators.maxLength(10)
        ,Validators.pattern(this.passwordPattern)
      ,this.shouldMatchNewPassword()]]
    });

    
   
  }

  validateForm(){

    this.formPasswordReset.get('oldPassword').updateValueAndValidity();
    this.formPasswordReset.get('newPassword').updateValueAndValidity();
    this.formPasswordReset.get('passwordConfirm').updateValueAndValidity();
  }

  updatePassword(){

    let curp = this.formPasswordReset.get('curp').value;
    let password = this.formPasswordReset.get('passwordConfirm').value;

    this.resetPasswordService.updatePassword(curp, password).then(resp => {
      this._alertsServices.success('La contraseña fue registrada con éxito.'); 
      this._router.navigate(['login']);
    }, error => {
      this._alertsServices.error('Error al intentar actualizar la contraseña.'); 
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


