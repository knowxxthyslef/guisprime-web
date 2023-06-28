import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralComponent } from 'src/app/comun/general-component/general.component';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent extends GeneralComponent implements OnInit {


  public viewConfirm1: boolean = false;
  public viewConfirm2: boolean = false;
  passwordReset: boolean = false;

  formPasswordReset!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    super();
  }

  ngOnInit(): void {
   

    this.formPasswordReset = this.formBuilder.group({
      curp:['', [Validators.required]
      ],
      password: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(8)]],
      passwordConfirm: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(8)]]
    });

    this.formPasswordReset.get('curp').disable();
   
  }


  doLogin(){
    /* this._alertsServices.success('<b>Alerta</b> No se pudo consultar el servicio de asegurados'); */
    this._router.navigate(['home']);
  }

}
