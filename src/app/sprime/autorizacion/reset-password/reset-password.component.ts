import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      oldPassword: ['', [Validators.required, Validators.maxLength(10)]],
      newPassword: ['', [Validators.required, Validators.maxLength(10)]],
      passwordConfirm: ['', [Validators.required, Validators.maxLength(10)]]
    });

    
   
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


}
