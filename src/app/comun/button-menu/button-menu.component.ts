import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-menu',
  templateUrl: './button-menu.component.html',
  styleUrls: ['./button-menu.component.scss']
})
export class ButtonMenuComponent implements OnInit {

  @Input() ruta: string = '';
  @Input() icon: string = '';
  @Input() description: string = 'Reporte de extracción<br> de patrones';
  constructor() { }

  ngOnInit(): void {
  }

  send(){
    
  }

}
