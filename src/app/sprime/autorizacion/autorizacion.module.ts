import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutorizacionRoutingModule } from './autorizacion-routing.module';
import { LoginComponent } from './login/login.component';
import { ComunModule } from 'src/app/comun/comun.module';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({
  declarations: [
    LoginComponent,
<<<<<<< HEAD
    ResetPasswordComponent
=======
>>>>>>> 6f524a6c82819681ba45f6c9f7530295c67d6e21
  ],
  imports: [
    CommonModule,
    AutorizacionRoutingModule,
    ComunModule
  ]
})
export class AutorizacionModule { }
