import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NAV } from 'src/app/comun/config/global';
import { GeneralComponent } from 'src/app/comun/general-component/general.component';

@Component({
  selector: 'app-registro-nuevo-usuario',
  templateUrl: './registro-nuevo-usuario.component.html',
  styleUrls: ['./registro-nuevo-usuario.component.scss']
})
export class RegistroNuevoUsuarioComponent extends GeneralComponent implements OnInit {

  public form!: FormGroup;
  public homeUsuario = NAV.administracion;
  public btnRenapo = {
    buttonIcon: false,
    buttonClass: 'btn-renapo',
    buttonText: 'Buscar en el sistema RENAPO',
    buttonAling: 'center center',
    accion: 'guardar'
  }
  public btnCancelar = {
    buttonIcon: false,
    buttonClass: 'btn-sprime-cancelar',
    buttonText: 'Cancelar',
    buttonAling: 'center center',
    accion: 'Cancelar'
  }
  public btnGuardar = {
    buttonIcon: false,
    buttonClass: 'btn-guardar',
    buttonText: 'Guardar',
    buttonAling: 'center center',
    accion: 'guardar'
  }

  constructor(private formBuilder: FormBuilder) {
    super();
  }
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      curp:[{value:'', disabled: true}, [Validators.required, Validators.maxLength(18), Validators.pattern(this.curpPattern)]],
      nombre:[{value:'', disabled: true}, [Validators.required]],
      äpePaterno:[{value:'', disabled: true}, [Validators.required]],
      apeMaterno:[{value:'', disabled: true}, [Validators.required]],
      OOAD:['', [Validators.required]],
      subdelegacion:['', [Validators.required]],
      perfil:['', [Validators.required]],
      correo:['', [Validators.required]],
      descripcion:['', [Validators.required]],
    },
  )}

  recibiRespuesta($event) {
    console.log($event);
  }

}
