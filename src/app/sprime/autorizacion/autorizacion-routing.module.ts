import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ROLE } from 'src/app/comun/helper/role.helper';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    /* canActivate: [RolAuthorizacionGuard], */
    /* data: {
      allowedRoles: [
        ROLE.ABOGADO,
        ROLE.ADMINISTRADOR
      ]
    } */
  },
  {
    path: 'login-password',
    component: ResetPasswordComponent
  },
  {
    path: 'resetPassword',
    component: ResetPasswordComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutorizacionRoutingModule { }
