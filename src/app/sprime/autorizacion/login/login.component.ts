import { Component, OnInit } from '@angular/core';
import {  FormGroup, Validators, FormBuilder } from '@angular/forms';
import { GeneralComponent } from 'src/app/comun/general-component/general.component';
import { HttpParams } from '@angular/common/http';
import { AccountService } from 'src/app/comun/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends GeneralComponent implements OnInit {
  form!: FormGroup;
  public ver: boolean = false;

  constructor(
    private accountService: AccountService,
    private formBuilder: FormBuilder,
  ) {
    super();
  }

  ngOnInit(): void {
    this.accountService.logout();
    
    this.form = this.formBuilder.group({
      curp:['', [Validators.required, 
        Validators.maxLength(18), 
        /* Validators.pattern(this.curpPattern) */
      ]],
      password: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(8)]]
    });

    this.form.get('curp').setValue('OERG820910HVZABC00');
    this.form.get('password').setValue('Mexico82'); 

    /* this.form.get('curp').setValue('HELB931103HMCRZR00');
    this.form.get('password').setValue('Mexico82');  */
  }

  viewPassword(){
    if(this.ver){
      this.ver = false;
    }else{
      this.ver = true;
    }
  }


  doLogin(){
    const body = new HttpParams()
    .set('username', this.form.controls.curp.value)
    .set('password', this.form.controls.password.value)
    .set('grant_type', 'password');
    this.accountService.login(body).then(success => {
      this._router.navigate(['home']);
    }).catch((err) => {
      if(err.status === 400){
        this._alertsServices.error('Credenciales invalidas');
      }
      else{
        this._alertsServices.error('El servidor presenta problemas en este momento. Lamentamos el inconveniente.');
      }
      
    });
    
  }

}
