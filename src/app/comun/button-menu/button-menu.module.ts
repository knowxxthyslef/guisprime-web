import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonMenuComponent } from './button-menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComunModule } from '../comun.module';



@NgModule({
  declarations: [
    ButtonMenuComponent
  ],
  imports: [
    CommonModule,
    ComunModule,
    FlexLayoutModule
  ],
  exports:[ButtonMenuComponent]
})
export class ButtonMenuModule { }
