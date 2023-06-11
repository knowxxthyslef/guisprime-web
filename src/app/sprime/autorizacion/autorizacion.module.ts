import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutorizacionRoutingModule } from './autorizacion-routing.module';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AutorizacionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ]
})
export class AutorizacionModule { }
