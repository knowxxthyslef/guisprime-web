import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrimDirective } from './directives/trim.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from './alertas';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [TrimDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule,
    FlexLayoutModule
  ],
  exports: [FormsModule, ReactiveFormsModule, TrimDirective, AlertModule, FlexLayoutModule]
})
export class ComunModule { }
