import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComunModule } from 'src/app/comun/comun.module';
import { RegistroNuevoUsuarioComponent } from './registro-nuevo-usuario.component';


@NgModule({
  declarations: [
    RegistroNuevoUsuarioComponent,
  ],
  imports: [
    CommonModule,
    ComunModule,
  ],
  exports: [
    RegistroNuevoUsuarioComponent,
  ]
})
export class RegistroNuevoUsuarioModule { }
