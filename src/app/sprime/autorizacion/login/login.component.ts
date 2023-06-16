import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { GeneralComponent } from 'src/app/comun/general-component/general.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends GeneralComponent implements OnInit {
  form!: FormGroup;
  public ver: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    super();
  }

  public curpPattern = "[A-Z][A,E,I,O,U,X][A-Z]{2}[0-9]{2}[0-1][0-9][0-3][0-9][M,H][A-Z]{2}[B,C,D,F,G,H,J,K,L,M,N,Ñ,P,Q,R,S,T,V,W,X,Y,Z]{3}[0-9,A-Z][0-9]";
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      curp:['', [Validators.required, 
        Validators.maxLength(18), 
        Validators.pattern(this.curpPattern)]],
      password: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(8)]]
    });

    this.form.get('curp').setValue('HELB931103HMCRZR00');
    this.form.get('password').setValue('Mexico82'); 
  }

  viewPassword(){
    if(this.ver){
      this.ver = false;
    }else{
      this.ver = true;
    }
  }

  doLogin(){
    /* this._alertsServices.success('<b>Alerta</b> No se pudo consultar el servicio de asegurados'); */
    this._router.navigate(['home']);
  }
}
