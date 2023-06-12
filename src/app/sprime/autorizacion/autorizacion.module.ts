import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutorizacionRoutingModule } from './autorizacion-routing.module';
import { LoginComponent } from './login/login.component';
import { ComunModule } from 'src/app/comun/comun.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AutorizacionRoutingModule,
    ComunModule
  ]
})
export class AutorizacionModule { }
