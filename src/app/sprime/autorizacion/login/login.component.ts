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

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      curp:['', [Validators.required, Validators.maxLength(40)]],
      password: ['', [Validators.maxLength(12), Validators.minLength(8)]]
    });
  }

  do(){
    this._alertsServices.info('<b>Alerta</b> No se pudo consultar el servicio de asegurados');
  }
}
