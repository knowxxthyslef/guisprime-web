import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCentralComponent } from './home-central/home-central.component';
import { ROLE } from 'src/app/comun/helper/role.helper';
import { ReporteDetalleComponent } from './reporte-detalle/reporte-detalle.component';
import { ReporteExtraccionComponent } from './reporte-extraccion/reporte-extraccion.component';
import { AutorizarApmComponent } from './autorizar-apm/autorizar-apm.component';
import { CifrasApmComponent } from './cifras-apm/cifras-apm.component';
import { CifrasPatronesComponent } from './cifras-patrones/cifras-patrones.component';
import { GenerarArchivosComponent } from './generar-archivos/generar-archivos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeCentralComponent,
    /* canActivate: [RolAuthorizacionGuard], */
    data: {
      allowedRoles: [
        ROLE.ABOGADO,
        ROLE.ADMINISTRADOR
      ]
    }
  },
  {
    path: 'reporte-detalle',
    component: ReporteDetalleComponent,
    /* canActivate: [RolAuthorizacionGuard], */
    data: {
      allowedRoles: [
        ROLE.ABOGADO,
        ROLE.ADMINISTRADOR
      ]
    }
  },
  {
    path: 'reporte-extraccion',
    component: ReporteExtraccionComponent,
    /* canActivate: [RolAuthorizacionGuard], */
    data: {
      allowedRoles: [
        ROLE.ABOGADO,
        ROLE.ADMINISTRADOR
      ]
    }
  },
  {
    path: 'autorizar-apm',
    component: AutorizarApmComponent,
    /* canActivate: [RolAuthorizacionGuard], */
    data: {
      allowedRoles: [
        ROLE.ABOGADO,
        ROLE.ADMINISTRADOR
      ]
    }
  },
  {
    path: 'cifras-apm',
    component: CifrasApmComponent,
    /* canActivate: [RolAuthorizacionGuard], */
    data: {
      allowedRoles: [
        ROLE.ABOGADO,
        ROLE.ADMINISTRADOR
      ]
    }
  },
  {
    path: 'cifras-patrones',
    component: CifrasPatronesComponent,
    /* canActivate: [RolAuthorizacionGuard], */
    data: {
      allowedRoles: [
        ROLE.ABOGADO,
        ROLE.ADMINISTRADOR
      ]
    }
  },
  {
    path: 'generar-archivos',
    component: GenerarArchivosComponent,
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
export class AdministracionRoutingModule { }
