import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComunModule } from 'src/app/comun/comun.module';
import { HomeAdministracionUsuarioComponent } from './home-administracion-usuario.component';
import { HomeAdministracionUsuarioRoutingModule } from './home-administracion-usuario-routing.module';
import { MainTitleModule } from 'src/app/comun/main-title';
import { RegistroExistenteUsuarioModule } from '../registro-existente-usuario/registro-existente-usuario.module';
import { RegistroNoLocalizadoModule } from '../registro-no-localizado/registro-no-localizado.module';
import { RegistroNuevoUsuarioModule } from '../registro-nuevo-usuario/registro-nuevo-usuario.module';


@NgModule({
  declarations: [
    HomeAdministracionUsuarioComponent,
  ],
  imports: [
    CommonModule,
    ComunModule,
    MainTitleModule,
    HomeAdministracionUsuarioRoutingModule,
    RegistroExistenteUsuarioModule,
    RegistroNoLocalizadoModule,
    RegistroNuevoUsuarioModule,
  ],
})
export class HomeAdministradorUsuarioModule { }
