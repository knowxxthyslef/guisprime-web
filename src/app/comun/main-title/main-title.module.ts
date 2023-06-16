import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { MainTitleComponent } from './main-title.component';
import { ComunModule } from '../comun.module';
import localeMx from '@angular/common/locales/es-MX';
registerLocaleData(localeMx);

@NgModule({
  declarations: [
    MainTitleComponent
  ],
  imports: [
    CommonModule,
    ComunModule
  ],
  exports:[MainTitleComponent],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-MX' }
  ]
})
export class MainTitleModule { }
