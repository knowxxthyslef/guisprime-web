import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { HomeCentralComponent } from './home-central/home-central.component';
import { SprimeModule } from '../sprime.module';
import { ComunModule } from 'src/app/comun/comun.module';
import { ButtonMenuModule } from 'src/app/comun/button-menu';


@NgModule({
  declarations: [
    HomeCentralComponent
  ],
  imports: [
    CommonModule,
    ComunModule,
    AdministracionRoutingModule,
    ButtonMenuModule,
    SprimeModule
  ]
})
export class AdministracionModule { }
