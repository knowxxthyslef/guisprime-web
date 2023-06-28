import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutorizacionRoutingModule } from './autorizacion-routing.module';
import { LoginComponent } from './login/login.component';
import { ComunModule } from 'src/app/comun/comun.module';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({
  declarations: [
    LoginComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    AutorizacionRoutingModule,
    ComunModule
  ]
})
export class AutorizacionModule { }
