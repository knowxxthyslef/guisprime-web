import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { HomeCentralComponent } from './home-central/home-central.component';
import { SprimeModule } from '../sprime.module';
import { ComunModule } from 'src/app/comun/comun.module';


@NgModule({
  declarations: [
    HomeCentralComponent
  ],
  imports: [
    CommonModule,
    ComunModule,
    AdministracionRoutingModule,
    SprimeModule
  ]
})
export class AdministracionModule { }
