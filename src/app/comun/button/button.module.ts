import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComunModule } from '../comun.module';
import { ButtonComponent } from './button.component';



@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    ComunModule
  ],
  exports:[
    ButtonComponent
  ]
})
export class ButtonModule { }
