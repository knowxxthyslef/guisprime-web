import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-menu',
  templateUrl: './button-menu.component.html',
  styleUrls: ['./button-menu.component.scss']
})
export class ButtonMenuComponent implements OnInit {

  @Input() ruta: string = '';
  @Input() icon: string = 'button-ico';
  @Input() description: string = 'Reporte de extracción<br> de patrones';
  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  send(){
    this.router.navigate(['login']);
  }

}
