import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MonthByYearService } from '../services/month-by-year.service';
import { ComboItem } from '../model/combo-item.model';

@Component({
  selector: 'app-year-select-filter',
  templateUrl: './year-select-filter.component.html',
  styleUrls: ['./year-select-filter.component.scss']
})
export class YearSelectFilterComponent implements OnInit {

  date = new FormControl("");
  currentYear : number = new Date().getFullYear();
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

    this.date.setValue(
      this.currentYear+''
    );

    this.monthByYearService.setYearSelected(this.currentYear);
  }

  selectYear(){
    let year = Number(this.date.value);
    this.monthByYearService.setYearSelected(year);
  }
}


