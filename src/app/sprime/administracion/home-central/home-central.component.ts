import { Component, OnInit } from '@angular/core';
import { ButtonMenu } from 'src/app/comun/button-menu';
import { AccountService } from 'src/app/comun/services/account.service';

@Component({
  selector: 'app-home-central',
  templateUrl: './home-central.component.html',
  styleUrls: ['./home-central.component.scss']
})
export class HomeCentralComponent implements OnInit {

  constructor(
    private accountService: AccountService
  ) { }
  menuList: ButtonMenu[] = [];

  ngOnInit(): void {
    this.menuList = this.accountService.getMenu();
    console.log(this.menuList);
  }

  generarMenuNivelCentral(){
    let reporteExtraccion = new ButtonMenu({
      icon: 'reporte-extraccion',
      secondaryColor: 'linear-gradient(#46a8b9, #96cfd9)',
      desOpcionMenu: 'Reporte de extracción<br> de patrones',
      idOpcionMenu: 1,
      color: '#f5f5f5',
      url: 'reporte-extraccion'
    });

    let reporteDetalles = new ButtonMenu({
      icon: 'reporte-detalles',
      secondaryColor: 'linear-gradient(#46a8b9, #96cfd9)',
      desOpcionMenu: 'Reportes detalles',
      idOpcionMenu: 2,
      color: '#f5f5f5',
      url: 'reporte-detalle'
    });

    let cifrasAPM = new ButtonMenu({
      icon: 'cifras-apm',
      secondaryColor: 'linear-gradient(#46a8b9, #96cfd9)',
      desOpcionMenu: 'Cifras de control<br>para APM',
      idOpcionMenu: 3,
      color: '#f5f5f5',
      url: 'cifras-apm'
    });

    let cifrasPatrones = new ButtonMenu({
      icon: 'cifras-patrones',
      secondaryColor: 'linear-gradient(#46a8b9, #96cfd9)',
      desOpcionMenu: 'Cifras de control<br>de patrones',
      idOpcionMenu: 4,
      color: '#f5f5f5',
      url: 'cifras-patrones'
    });

    let autorizarAPM = new ButtonMenu({
      icon: 'autorizar-apm',
      secondaryColor: 'linear-gradient(#46a8b9, #96cfd9)',
      desOpcionMenu: 'Autorizar afectación<br> a APM',
      idOpcionMenu: 5,
      color: '#f5f5f5',
      url: 'autorizar-apm'
    });

    let generarArchivos = new ButtonMenu({
      icon: 'generar-archivos',
      secondaryColor: 'linear-gradient(#46a8b9, #96cfd9)',
      desOpcionMenu: 'Generación de archivos<br> de patrones anual',
      idOpcionMenu: 6,
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
