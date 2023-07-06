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
import { PatronesVigentesSinTrabajadoresComponent } from './patrones-vigentes-sin-trabajadores/patrones-vigentes-sin-trabajadores.component';
import { PatronesPrimaMediaActualComponent } from './patrones-prima-media-actual/patrones-prima-media-actual.component';
import { PatronesVigentesSeisMesesComponent } from './patrones-vigentes-seis-meses/patrones-vigentes-seis-meses.component';

const routes: Routes = [
  {
    path: '',
    component: HomeCentralComponent,
    /* canActivate: [RolAuthorizacionGuard], */
    data: {
      allowedRoles: [
        ROLE.NIVELCENTRAL,
        ROLE.DELEGACIONAL,
        ROLE.SUBDELEGACIONAL
      ]
    }
  },
  {
    path: 'reporte-detalle',
    component: ReporteDetalleComponent,
    /* canActivate: [RolAuthorizacionGuard], */
    data: {
      allowedRoles: [
        ROLE.NIVELCENTRAL,
        ROLE.DELEGACIONAL,
        ROLE.SUBDELEGACIONAL
      ]
    }
  },
  {
    path: 'reporte-extraccion',
    component: ReporteExtraccionComponent,
    /* canActivate: [RolAuthorizacionGuard], */
    data: {
      allowedRoles: [
        ROLE.NIVELCENTRAL,
        ROLE.DELEGACIONAL,
        ROLE.SUBDELEGACIONAL
      ]
    }
  },
  {
    path: 'autorizar-apm',
    component: AutorizarApmComponent,
    /* canActivate: [RolAuthorizacionGuard], */
    data: {
      allowedRoles: [
        ROLE.NIVELCENTRAL,
        ROLE.DELEGACIONAL,
        ROLE.SUBDELEGACIONAL
      ]
    }
  },
  {
    path: 'cifras-apm',
    component: CifrasApmComponent,
    /* canActivate: [RolAuthorizacionGuard], */
    data: {
      allowedRoles: [
        ROLE.NIVELCENTRAL,
        ROLE.DELEGACIONAL,
        ROLE.SUBDELEGACIONAL
      ]
    }
  },
  {
    path: 'patrones-vigentes-sin-trabajadores',
    component: PatronesVigentesSinTrabajadoresComponent,
    /* canActivate: [RolAuthorizacionGuard], */
    data: {
      allowedRoles: [
        ROLE.NIVELCENTRAL,
        ROLE.DELEGACIONAL,
        ROLE.SUBDELEGACIONAL
      ]
    }
  },
  {
    path: 'patrones-vigentes-seis-meses',
    component: PatronesVigentesSeisMesesComponent,
    /* canActivate: [RolAuthorizacionGuard], */
    data: {
      allowedRoles: [
        ROLE.NIVELCENTRAL,
        ROLE.DELEGACIONAL,
        ROLE.SUBDELEGACIONAL
      ]
    }
  },
  {
    path: 'patrones-prima-media-actual',
    component: PatronesPrimaMediaActualComponent,
    /* canActivate: [RolAuthorizacionGuard], */
    data: {
      allowedRoles: [
        ROLE.NIVELCENTRAL,
        ROLE.DELEGACIONAL,
        ROLE.SUBDELEGACIONAL
      ]
    }
  },
  {
    path: 'cifras-patrones',
    component: CifrasPatronesComponent,
    /* canActivate: [RolAuthorizacionGuard], */
    data: {
      allowedRoles: [
        ROLE.NIVELCENTRAL,
        ROLE.DELEGACIONAL,
        ROLE.SUBDELEGACIONAL
      ]
    }
  },
  {
    path: 'generar-archivos',
    component: GenerarArchivosComponent,
    /* canActivate: [RolAuthorizacionGuard], */
    data: {
      allowedRoles: [
        ROLE.NIVELCENTRAL,
        ROLE.DELEGACIONAL,
        ROLE.SUBDELEGACIONAL
      ]
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
