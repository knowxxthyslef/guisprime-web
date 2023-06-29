import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComunModule } from 'src/app/comun/comun.module';
import { RegistroNuevoUsuarioComponent } from './registro-nuevo-usuario.component';
import { ButtonModule } from 'src/app/comun/button';
import { RegistroNuevoUsuarioRoutingModule } from './registro-nuevo-usuario-routing.module';
import { MainTitleModule } from 'src/app/comun/main-title';


@NgModule({
  declarations: [
    RegistroNuevoUsuarioComponent,
  ],
  imports: [
    CommonModule,
    ComunModule,
    MainTitleModule,
    ButtonModule,
    RegistroNuevoUsuarioRoutingModule
  ],
  exports: [
    RegistroNuevoUsuarioComponent,
  ]
})
export class RegistroNuevoUsuarioModule { }
