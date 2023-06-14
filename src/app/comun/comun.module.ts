import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrimDirective } from './directives/trim.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from './alertas';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderModule } from './header';
import { SafePipe } from './pipe/safe.pipe';
import { MaskPipe } from './pipe/mask.pipe';


@NgModule({
  declarations: [TrimDirective, SafePipe, MaskPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule,
    HeaderModule,
    FlexLayoutModule
  ],
  exports: [FormsModule, ReactiveFormsModule, TrimDirective, AlertModule, HeaderModule, FlexLayoutModule, SafePipe, MaskPipe]
})
export class ComunModule { }
