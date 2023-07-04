import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MonthByYearService } from '../services/month-by-year.service';
import { Subscription } from 'rxjs';
import { ComboItem } from '../model/combo-item.model';



@Component({
  selector: 'app-month-select-filter',
  templateUrl: './month-select-filter.component.html',
  styleUrls: ['./month-select-filter.component.scss']
})
export class MonthSelectFilterComponent implements OnInit {

  dateMonth = new FormControl("");
  currentYear : number = new Date().getFullYear();
  curentMonth : number = new Date().getMonth();

  subscripcion: Subscription;
  months: string[] = ["Enero","Febrero", "Marzo", "Abril", "Mayo", "Junio"
                    , "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  monthList: ComboItem[] = [];

  constructor(
    private monthByYearService: MonthByYearService 
  ) { 
    this.subscripcion = this.monthByYearService.isSelected$.subscribe(resp => {

      this.monthList = [];
      let limit = 12;

      if(resp == this.currentYear){
          limit = this.curentMonth + 1;
      }

      for(let x = 1; x <= limit; x++){
        this.monthList.push({
          label: this.months[x-1]
          ,value: x
        });
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscripcion.unsubscribe();
  } 
}
