import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutorizacionRoutingModule } from './autorizacion-routing.module';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AutorizacionRoutingModule,
    FlexLayoutModule
  ]
})
export class AutorizacionModule { }
