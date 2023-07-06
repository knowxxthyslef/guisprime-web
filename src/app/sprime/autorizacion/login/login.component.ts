import { AfterViewInit, Component, OnInit } from '@angular/core';
import {  FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GeneralComponent } from 'src/app/comun/general-component/general.component';
import { HttpParams } from '@angular/common/http';
import { AccountService } from 'src/app/comun/services/account.service';
import { AdministrationService } from 'src/app/comun/services/administration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends GeneralComponent implements OnInit, AfterViewInit {
  form!: FormGroup;
  public ver: boolean = false;
  public validCurp: boolean = false;
  passwordPattern = new RegExp("^(?=.*[^A-Za-z0-9]{1}.*)(?=.*[0-9]{1}.*[0-9]{1}.*[0-9]{1}.*)(?=.*[A-Za-z]{1}.*[A-Za-z]{1}.*[A-Za-z]{1}.*[A-Za-z]{1}.*[A-Za-z]{1}.*[A-Za-z]{1}.*).*$");

  constructor(
    private accountService: AccountService,
    private administrationService: AdministrationService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    super();
  }
  ngAfterViewInit(): void {
    let message = this.route.snapshot.paramMap.get('message');
    if(message)
      this._alertsServices.success(message);
  }

  ngOnInit(): void {
    this.accountService.logout();
    
    this.form = this.formBuilder.group({
      curp:['', [Validators.required, 
        Validators.maxLength(18), 
        Validators.pattern(this.curpPattern)
      ]],
      /* password: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(10)]] */
      password: ['', []]
    });

    this.form.get('curp').setValue('OERG820910HMCBBB00');
    this.form.get('password').setValue('Mexico820*'); 

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

    if(!this.validCurp){

      this._spinner.show();
      let curp = this.form.get('curp').value;
      this.administrationService.getCurpValid(curp).then(resp => {

        console.log(resp);
        if(resp.indCapturaPassword == 0){
          this.form.controls['curp'].disable();
          this.validCurp = true;
          this.form.controls['password'].setValidators([Validators.required, Validators.pattern(this.passwordPattern)]);
          for (const key in this.form.controls) {
            this.form.get(key).updateValueAndValidity();
          }
          return;
        }else{
          this._router.navigate(['/', 'login', { outlets: { 'base': ['resetPassword'] } }]);
        }
        
      }).catch((error) => {
          this.form.get('curp')?.setErrors({ credentials: true });
      });

    }else{

      this._spinner.show();
      const body = new HttpParams()
      .set('username', this.form.controls.curp.value)
      .set('password', this.form.controls.password.value)
      .set('grant_type', 'password');
      this.accountService.login(body).then(response => {
        this._spinner.hide();
        let isAdmin: boolean = false;
        if(isAdmin){
          this._router.navigate(['administracion']);
        }else{
          this._router.navigate(['home']);
        }
      }).catch((err) => {
        this._spinner.hide();
        if(err.status === 400){
          this.form.get('password')?.setErrors({ credentials: true });
          /* this._alertsServices.error('Credenciales invalidas'); */
        }
        else{
          this._alertsServices.error('El servidor presenta problemas en este momento. Lamentamos el inconveniente.');
        }
        
      });

    }
    
    
  }

}
