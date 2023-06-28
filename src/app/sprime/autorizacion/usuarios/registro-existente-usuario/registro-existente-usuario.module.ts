import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComunModule } from 'src/app/comun/comun.module';
import { RegistroExistenteUsuarioComponent } from './registro-existente-usuario.component';
import { ButtonModule } from 'src/app/comun/button';


@NgModule({
  declarations: [
    RegistroExistenteUsuarioComponent,
  ],
  imports: [
    CommonModule,
    ComunModule,
    ButtonModule
  ],
  exports: [
    RegistroExistenteUsuarioComponent,
  ]
})
export class RegistroExistenteUsuarioModule { }
