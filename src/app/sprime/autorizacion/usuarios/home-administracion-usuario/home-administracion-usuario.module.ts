import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComunModule } from 'src/app/comun/comun.module';
import { HomeAdministracionUsuarioComponent } from './home-administracion-usuario.component';
import { RegistroExistenteUsuarioComponent } from '../registro-existente-usuario/registro-existente-usuario.component';
import { RegistroNuevoUsuarioComponent } from '../registro-nuevo-usuario/registro-nuevo-usuario.component';
import { HomeAdministracionUsuarioRoutingModule } from './home-administracion-usuario-routing.module';
import { MainTitleModule } from 'src/app/comun/main-title';
import { RegistroNoLocalizadoComponent } from '../registro-no-localizado/registro-no-localizado.component';


@NgModule({
  declarations: [
    HomeAdministracionUsuarioComponent,
    RegistroExistenteUsuarioComponent,
    RegistroNuevoUsuarioComponent,
    RegistroNoLocalizadoComponent
  ],
  imports: [
    CommonModule,
    HomeAdministracionUsuarioRoutingModule,
    ComunModule,
    MainTitleModule
  ],
  exports: [
    RegistroExistenteUsuarioComponent,
    RegistroNuevoUsuarioComponent,
    RegistroNoLocalizadoComponent
  ]
})
export class HomeAdministradorUsuarioModule { }
