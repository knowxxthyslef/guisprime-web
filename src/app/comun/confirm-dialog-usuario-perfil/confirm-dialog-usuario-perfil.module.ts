import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ComunModule } from '../comun.module';
import { ConfirmDialogUsuarioPerfilComponent } from './confirm-dialog-usuario-perfil.component';


@NgModule({
  declarations: [
    ConfirmDialogUsuarioPerfilComponent
  ],
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    ComunModule,
    CommonModule
  ],
  exports: [
    ConfirmDialogUsuarioPerfilComponent
  ]
})
export class ConfirmDialogUsuarioPerfilModule { }
