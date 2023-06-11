import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ROLE } from 'src/app/comun/helper/role.helper';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    /* canActivate: [RolAuthorizacionGuard], */
    data: {
      allowedRoles: [
        ROLE.ABOGADO,
        ROLE.ADMINISTRADOR
      ]
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutorizacionRoutingModule { }
