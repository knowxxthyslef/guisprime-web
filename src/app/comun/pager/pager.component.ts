import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Page } from '../dataObject/page';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styles: [
    `
    
    `
  ]
})
export class PagerComponent implements OnInit {


  @Input() pageModel : Page<any>;
  @Output() paged = new EventEmitter<number>();
  
  ngOnInit() {
    //this.pageModel.prepare();
  }
  
  page( pagina : number ){
    this.paged.emit(pagina);
  }
  
}
