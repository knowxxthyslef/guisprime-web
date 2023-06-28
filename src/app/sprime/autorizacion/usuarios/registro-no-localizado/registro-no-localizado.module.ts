import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComunModule } from 'src/app/comun/comun.module';
import { RegistroNoLocalizadoComponent } from './registro-no-localizado.component';


@NgModule({
  declarations: [
    RegistroNoLocalizadoComponent,
  ],
  imports: [
    CommonModule,
    ComunModule,
  ],
  exports: [
    RegistroNoLocalizadoComponent,
  ]
})
export class RegistroNoLocalizadoModule { }
