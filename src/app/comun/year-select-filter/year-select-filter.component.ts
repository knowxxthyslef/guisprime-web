import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import * as moment from 'moment';
import { YearSelectHeaderComponent } from './year-select-header/year-select-header.component';
import { MonthByYearService } from '../services/month-by-year.service';
import { ComboItem } from '../model/combo-item.model';

const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY',
  },
  display: {
    dateInput: 'YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-year-select-filter',
  templateUrl: './year-select-filter.component.html',
  styleUrls: ['./year-select-filter.component.scss'],
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
export class YearSelectFilterComponent implements OnInit {

  date = new FormControl("");

  

  header = YearSelectHeaderComponent;

  currentYear : number = new Date().getFullYear();
  maxDate = new Date();
  minDate = new Date();

  yearList: ComboItem[] = [];



  constructor(
    private monthByYearService: MonthByYearService
  ) { }

  ngOnInit(): void {

    for(let x  = 0; x <= 5; x++){
      this.yearList.push({
        label: ""+(this.currentYear - x)
        ,value: this.currentYear - x
      })
    }

    this.minDate.setFullYear(this.currentYear - 5);

    this.monthByYearService.setYearSelected(this.currentYear);
  }


  setYear(normalizedMonthAndYear: moment.Moment, datepicker: MatDatepicker<moment.Moment>) {
    const ctrlValue = this.date.value!;

    this.monthByYearService.setYearSelected(normalizedMonthAndYear.year());
    
    datepicker.close();
  }

  openYearSelect(){

  }

}


