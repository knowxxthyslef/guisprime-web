import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonMenuComponent } from './button-menu.component';
import { ComunModule } from '../comun.module';



@NgModule({
  declarations: [
    ButtonMenuComponent
  ],
  imports: [
    CommonModule,
    ComunModule
  ],
  exports:[ButtonMenuComponent]
})
export class ButtonMenuModule { }