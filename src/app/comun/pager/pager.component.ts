import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Page } from '../dataObject/page';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styles: [
    `
    .pagination>.active>a:hover {
      color: white!important;
    }

    .pagination>li>a:hover {
      color: black!important;
    }

    .pagination>li>a {
      font-size: 16px;
      font-weight: 500;
    }

    .bi-chevron-left {
      -webkit-text-stroke: 1px;
    }

    .bi-chevron-right {
      -webkit-text-stroke: 1px;
    }
    
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
