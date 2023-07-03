import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { HomeCentralComponent } from './home-central/home-central.component';
import { SprimeModule } from '../sprime.module';
import { ComunModule } from 'src/app/comun/comun.module';
import { ButtonMenuModule } from 'src/app/comun/button-menu';
import { ReporteExtraccionComponent } from './reporte-extraccion/reporte-extraccion.component';
import { ReporteDetalleComponent } from './reporte-detalle/reporte-detalle.component';
import { CifrasApmComponent } from './cifras-apm/cifras-apm.component';
import { CifrasPatronesComponent } from './cifras-patrones/cifras-patrones.component';
import { AutorizarApmComponent } from './autorizar-apm/autorizar-apm.component';
import { GenerarArchivosComponent } from './generar-archivos/generar-archivos.component';
import { MainTitleModule } from 'src/app/comun/main-title';
import { ConfirmDialogModule } from 'src/app/comun/confirm-dialog';
import { DataTableModule } from 'src/app/comun/data-table';
import { SummaryColoredCardModule } from 'src/app/comun/summary-colored-card';
import { PagerModule } from 'src/app/comun/pager';
import { PatronesVigentesSinTrabajadoresComponent } from './patrones-vigentes-sin-trabajadores/patrones-vigentes-sin-trabajadores.component';
import { PatronesPrimaMediaActualComponent } from './patrones-prima-media-actual/patrones-prima-media-actual.component';





@NgModule({
  declarations: [
    HomeCentralComponent,
    ReporteExtraccionComponent,
    ReporteDetalleComponent,
    CifrasApmComponent,
    CifrasPatronesComponent,
    AutorizarApmComponent,
    GenerarArchivosComponent,
    PatronesVigentesSinTrabajadoresComponent,
    PatronesPrimaMediaActualComponent
  ],
  imports: [
    CommonModule,
    ComunModule,
    AdministracionRoutingModule,
    ButtonMenuModule,
    SummaryColoredCardModule,
    ConfirmDialogModule,
    MainTitleModule,
    DataTableModule,
    PagerModule,
    SprimeModule
  ]
})
export class AdministracionModule { }
