import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutorizacionRoutingModule } from './autorizacion-routing.module';
import { LoginComponent } from './login/login.component';
import { ComunModule } from 'src/app/comun/comun.module';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetPasswordService } from './services/reset-password.service';
import { LoginDataService } from './services/login-data.service';


@NgModule({
  declarations: [
    LoginComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    AutorizacionRoutingModule,
    ComunModule
  ],
  providers: [ResetPasswordService,LoginDataService]
})
export class AutorizacionModule { }
