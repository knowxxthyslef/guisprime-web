import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROLE } from 'src/app/comun/helper/role.helper';
import { RegistroNuevoUsuarioComponent } from './registro-nuevo-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: RegistroNuevoUsuarioComponent,
    /* canActivate: [RolAuthorizacionGuard], */
    data: {
      allowedRoles: [
        ROLE.ADMINISTRADOR
      ]
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroNuevoUsuarioRoutingModule { }
