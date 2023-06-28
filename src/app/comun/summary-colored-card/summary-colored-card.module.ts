import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComunModule } from '../comun.module';
import { SummaryColoredCardComponent } from './summary-colored-card.component';



@NgModule({
  declarations: [
    SummaryColoredCardComponent
  ],
  imports: [
    CommonModule,
    ComunModule
  ],
  exports:[SummaryColoredCardComponent]
})
export class SummaryColoredCardModule { }
