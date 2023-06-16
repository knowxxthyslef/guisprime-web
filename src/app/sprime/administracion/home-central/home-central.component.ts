import { Component, OnInit } from '@angular/core';
import { ButtonMenu } from 'src/app/comun/button-menu';

@Component({
  selector: 'app-home-central',
  templateUrl: './home-central.component.html',
  styleUrls: ['./home-central.component.scss']
})
export class HomeCentralComponent implements OnInit {

  constructor() { }
  menuList: ButtonMenu[] = [];

  ngOnInit(): void {
    
    let reporteExtraccion = new ButtonMenu({
      icon: 'reporte-extraccion',
      secondaryColor: 'linear-gradient(#46a8b9, #96cfd9)',
      description: 'Reporte de extracción<br> de patrones',
      id: 1,
      color: '#f5f5f5',
      url: 'reporte-extraccion'
    });

    let reporteDetalles = new ButtonMenu({
      icon: 'reporte-detalles',
      secondaryColor: 'linear-gradient(#46a8b9, #96cfd9)',
      description: 'Reportes detalles',
      id: 2,
      color: '#f5f5f5',
      url: 'reporte-detalle'
    });

    let cifrasAPM = new ButtonMenu({
      icon: 'cifras-apm',
      secondaryColor: 'linear-gradient(#46a8b9, #96cfd9)',
      description: 'Cifras de control<br>para APM',
      id: 3,
      color: '#f5f5f5',
      url: 'cifras-apm'
    });

    let cifrasPatrones = new ButtonMenu({
      icon: 'cifras-patrones',
      secondaryColor: 'linear-gradient(#46a8b9, #96cfd9)',
      description: 'Cifras de control<br>de patrones',
      id: 4,
      color: '#f5f5f5',
      url: 'cifras-patrones'
    });

    let autorizarAPM = new ButtonMenu({
      icon: 'autorizar-apm',
      secondaryColor: 'linear-gradient(#46a8b9, #96cfd9)',
      description: 'Autorizar afectación<br> a APM',
      id: 5,
      color: '#f5f5f5',
      url: 'autorizar-apm'
    });

    let generarArchivos = new ButtonMenu({
      icon: 'generar-archivos',
      secondaryColor: 'linear-gradient(#46a8b9, #96cfd9)',
      description: 'Generación de archivos<br> de patrones anual',
      id: 6,
      color: '#f5f5f5',
      url: 'generar-archivos'
    });

    this.menuList.push(reporteExtraccion);
    this.menuList.push(reporteDetalles);
    this.menuList.push(cifrasAPM);
    this.menuList.push(cifrasPatrones);
    this.menuList.push(autorizarAPM);
    this.menuList.push(generarArchivos);


  }

}
