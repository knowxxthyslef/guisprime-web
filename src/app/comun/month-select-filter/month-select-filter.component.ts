import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import * as moment from 'moment';
import { MonthSelectHeaderComponent } from './month-select-header/month-select-header.component';

const MY_FORMATS = {
  parse: {
    dateInput: 'MMMM',
  },
  display: {
    dateInput: 'MMMM',
    monthYearLabel: 'MMMM',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM',
  },
};

@Component({
  selector: 'app-month-select-filter',
  templateUrl: './month-select-filter.component.html',
  styleUrls: ['./month-select-filter.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    { provide: MAT_DATE_LOCALE, useValue: 'es-MX' },
  ]
})
export class MonthSelectFilterComponent implements OnInit {

  dateMonth = new FormControl(moment());

  header = MonthSelectHeaderComponent;

  constructor() { }

  ngOnInit(): void {
    this.dateMonth.disable();
  }

  
  setMonth(normalizedMonthAndYear: moment.Moment, datepicker: MatDatepicker<moment.Moment>) {
    const ctrlValue = this.dateMonth.value!;
    ctrlValue.month(normalizedMonthAndYear.month());
    this.dateMonth.setValue(ctrlValue);
    datepicker.close();
  }

}