import { DatePipe, formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MainTitle } from './main-title.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-title',
  templateUrl: './main-title.component.html',
  styleUrls: ['./main-title.component.scss']
})
export class MainTitleComponent implements OnInit {

  @Input() title: MainTitle = new MainTitle({
    title: '',
    salir: false,
    url: 'home'
  });


  public date = new Date();
  pipe = new DatePipe('es-MX')
  public today:string =  this.pipe.transform(this.date, 'yyyy-MM-dd', 'es-MX');

  constructor(public datePipe: DatePipe, private router: Router) { }

  ngOnInit(): void {
  }

  salir(){
    this.router.navigate([this.title.url]);
  }

}
