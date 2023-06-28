import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralComponent } from 'src/app/comun/general-component/general.component';

@Component({
  selector: 'app-home-administracion-usuario',
  templateUrl: './home-administracion-usuario.component.html',
  styleUrls: ['./home-administracion-usuario.component.scss']
})
export class HomeAdministracionUsuarioComponent extends GeneralComponent implements OnInit {

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      curp:['', [Validators.required, 
        Validators.maxLength(18), 
        Validators.pattern(this.curpPattern)]],
    });
  }

}
