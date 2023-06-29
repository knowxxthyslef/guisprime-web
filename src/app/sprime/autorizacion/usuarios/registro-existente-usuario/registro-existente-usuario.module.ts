import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComunModule } from 'src/app/comun/comun.module';
import { RegistroExistenteUsuarioComponent } from './registro-existente-usuario.component';
import { ButtonModule } from 'src/app/comun/button';
import { ConfirmDialogModule } from 'src/app/comun/confirm-dialog';
import { ConfirmDialogUsuarioPerfilModule } from 'src/app/comun/confirm-dialog-usuario-perfil';


@NgModule({
  declarations: [
    RegistroExistenteUsuarioComponent,
  ],
  imports: [
    CommonModule,
    ComunModule,
    ButtonModule,
    ConfirmDialogModule,
    ConfirmDialogUsuarioPerfilModule
  ],
  exports: [
    RegistroExistenteUsuarioComponent,
  ]
})
export class RegistroExistenteUsuarioModule { }
