import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-title',
  templateUrl: './main-title.component.html',
  styleUrls: ['./main-title.component.scss']
})
export class MainTitleComponent implements OnInit {


  public date = new Date();
  /* public today:string=formatDate(this.date, 'yyyy-MM-dd', 'es-MX'); */
  pipe = new DatePipe('es-MX')

  
  public today:string =  this.pipe.transform(this.date, 'yyyy-MM-dd', 'es-MX');

  constructor(public datePipe: DatePipe) { }
 

  ngOnInit(): void {
  }

}
