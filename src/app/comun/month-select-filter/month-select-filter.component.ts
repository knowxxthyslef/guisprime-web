import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import * as moment from 'moment';
import { MonthSelectHeaderComponent } from './month-select-header/month-select-header.component';
import { MonthByYearService } from '../services/month-by-year.service';
import { Subscription } from 'rxjs';

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

  currentYear : number = new Date().getFullYear();
  currentMonth : number = new Date().getMonth();
  maxDate = new Date();
  minDate = new Date();

  subscripcion: Subscription;

  constructor(
    private monthByYearService: MonthByYearService 
  ) { 
    this.subscripcion = this.monthByYearService.isSelected$.subscribe(resp => {
      if(resp != this.currentYear){
        this.minDate = new Date(resp,0,1);
        this.maxDate = new Date(resp,11,31);
      }else{
        this.minDate = new Date(resp,0,1);
        this.maxDate = new Date();
        let selectedMonth = this.dateMonth.value.month();
        if(this.currentMonth < selectedMonth)
          this.dateMonth.setValue(moment());
      }
    });
  }

  ngOnInit(): void {
    this.dateMonth.disable();
  }

  ngOnDestroy(): void {
    this.subscripcion.unsubscribe();
  } 

  
  setMonth(normalizedMonthAndYear: moment.Moment, datepicker: MatDatepicker<moment.Moment>) {
    const ctrlValue = this.dateMonth.value!;
    ctrlValue.month(normalizedMonthAndYear.month());
    this.dateMonth.setValue(ctrlValue);
    datepicker.close();
  }

}
