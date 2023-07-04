import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrimDirective } from './directives/trim.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from './alertas';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderModule } from './header';
import { SafePipe } from './pipe/safe.pipe';
import { MaskPipe } from './pipe/mask.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { YearSelectHeaderComponent } from './year-select-filter/year-select-header/year-select-header.component';
import { YearSelectFilterComponent } from './year-select-filter/year-select-filter.component';
import { MonthSelectHeaderComponent } from './month-select-filter/month-select-header/month-select-header.component';
import { MonthSelectFilterComponent } from './month-select-filter/month-select-filter.component';
import { DelegacionSelectComponent } from './delegacion-select/delegacion-select.component';
import { MatSelectModule } from '@angular/material/select';
import { MonthByYearService } from './services/month-by-year.service';

@NgModule({
  declarations: [
      TrimDirective
      , SafePipe
      , MaskPipe
      ,YearSelectFilterComponent
      ,YearSelectHeaderComponent
      ,MonthSelectFilterComponent
      , MonthSelectHeaderComponent
      , DelegacionSelectComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule,
    HeaderModule,
    FlexLayoutModule,
    MomentDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatNativeDateModule,
  ],
  exports: [FormsModule
      , ReactiveFormsModule
      , TrimDirective
      , AlertModule
      , HeaderModule
      , FlexLayoutModule
      , SafePipe
      , MaskPipe
      ,YearSelectFilterComponent
    ,YearSelectHeaderComponent
    ,MonthSelectFilterComponent
    , MonthSelectHeaderComponent
    ,DelegacionSelectComponent
      ],providers: [
        MatDatepickerModule
        ,MonthByYearService
      ]
})
export class ComunModule { }
