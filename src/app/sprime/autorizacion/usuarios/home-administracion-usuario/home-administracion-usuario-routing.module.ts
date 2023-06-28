import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROLE } from 'src/app/comun/helper/role.helper';
import { HomeAdministracionUsuarioComponent } from './home-administracion-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: HomeAdministracionUsuarioComponent,
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
export class HomeAdministracionUsuarioRoutingModule { }
