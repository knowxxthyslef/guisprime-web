import { Component, OnInit } from '@angular/core';
import { ButtonMenu } from 'src/app/comun/button-menu';

@Component({
  selector: 'app-reporte-detalle',
  templateUrl: './reporte-detalle.component.html',
  styleUrls: ['./reporte-detalle.component.scss']
})
export class ReporteDetalleComponent implements OnInit {

  constructor() { }
  menuList: ButtonMenu[] = [];

  ngOnInit(): void {
    this.generarMenu();
  }

  generarMenu(){
    let patronesVigentes = new ButtonMenu({
      icon: 'reporte-extraccion',
      secondaryColor: 'linear-gradient(#46a8b9, #96cfd9)',
      description: 'Patrones vigentes<br> sin trabajadores',
      id: 1,
      color: '#f5f5f5',
      url: 'reporte-extraccion'
    });

    let reporteDetalles = new ButtonMenu({
      icon: 'reporte-detalles',
      secondaryColor: 'linear-gradient(#46a8b9, #96cfd9)',
      description: 'Patrones vigentes<br> con menos de 6 meses',
      id: 2,
      color: '#f5f5f5',
      url: 'reporte-detalle'
    });

    let cifrasAPM = new ButtonMenu({
      icon: 'cifras-apm',
      secondaryColor: 'linear-gradient(#46a8b9, #96cfd9)',
      description: 'Patrones que se<br> afectarán a la prima<br> media del mes actual',
      id: 3,
      color: '#f5f5f5',
      url: 'cifras-apm'
    });

    this.menuList.push(patronesVigentes);
    this.menuList.push(reporteDetalles);
    this.menuList.push(cifrasAPM);
    
  }

}
