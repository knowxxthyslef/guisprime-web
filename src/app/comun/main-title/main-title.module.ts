import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTitleComponent } from './main-title.component';
import { ComunModule } from '../comun.module';

@NgModule({
  declarations: [
    MainTitleComponent
  ],
  imports: [
    CommonModule,
    ComunModule
  ],
  exports:[MainTitleComponent]
})
export class MainTitleModule { }
