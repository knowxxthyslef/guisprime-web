import { AfterViewInit, Component, OnInit } from '@angular/core';
import {  FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GeneralComponent } from 'src/app/comun/general-component/general.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends GeneralComponent implements OnInit, AfterViewInit {
  form!: FormGroup;
  public ver: boolean = false;

  constructor(
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
