import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrimDirective } from './directives/trim.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from './alertas';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderModule } from './header';


@NgModule({
  declarations: [TrimDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule,
    HeaderModule,
    FlexLayoutModule
  ],
  exports: [FormsModule, ReactiveFormsModule, TrimDirective, AlertModule, HeaderModule, FlexLayoutModule]
})
export class ComunModule { }
