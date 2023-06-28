import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-existente-usuario',
  templateUrl: './registro-existente-usuario.component.html',
  styleUrls: ['./registro-existente-usuario.component.scss']
})
export class RegistroExistenteUsuarioComponent implements OnInit {

  public btnBaja = {
    buttonIcon: true,
    buttonUrl: 'atomo_icono_usuario.svg',
    buttonClass: 'btn-administrador',
    buttonText: 'Baja usuario'
  }
  public btnPassword = {
    buttonIcon: true,
    buttonUrl: 'atomo_icono_contraseña.svg',
    buttonClass: 'btn-administrador',
    buttonText: 'Baja usuario'
  }
  constructor() { }

  ngOnInit(): void {
  }

  recibiRespuesta($event) {
    console.log($event);
  }

}
