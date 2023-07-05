import { Component, OnInit } from '@angular/core';
import { ButtonMenu } from 'src/app/comun/button-menu';
import { ConfirmDialogService } from 'src/app/comun/confirm-dialog/confirm-dialog.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/comun/confirm-dialog';

@Component({
  selector: 'app-reporte-detalle',
  templateUrl: './reporte-detalle.component.html',
  styleUrls: ['./reporte-detalle.component.scss']
})
export class ReporteDetalleComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private dialogService: ConfirmDialogService
    ) { }
  menuList: ButtonMenu[] = [];

  ngOnInit(): void {
    this.generarMenu();
  }

  generarMenu(){
    let patronesVigentes = new ButtonMenu({
      icon: 'reporte-extraccion',
      secondaryColor: 'linear-gradient(#46a8b9, #96cfd9)',
      desOpcionMenu: 'Patrones vigentes<br> sin trabajadores',
      idOpcionMenu: 1,
      color: '#f5f5f5',
      url: 'patrones-vigentes-sin-trabajadores'
    });

    let reporteDetalles = new ButtonMenu({
      icon: 'reporte-detalles',
      secondaryColor: 'linear-gradient(#46a8b9, #96cfd9)',
      desOpcionMenu: 'Patrones vigentes<br> con menos de 6 meses',
      idOpcionMenu: 2,
      color: '#f5f5f5',
      url: 'reporte-detalle'
    });

    let cifrasAPM = new ButtonMenu({
      icon: 'cifras-apm',
      secondaryColor: 'linear-gradient(#46a8b9, #96cfd9)',
      desOpcionMenu: 'Patrones que se<br> afectarán a la prima<br> media del mes actual',
      idOpcionMenu: 3,
      color: '#f5f5f5',
      url: 'patrones-prima-media-actual'
    });

    this.menuList.push(patronesVigentes);
    this.menuList.push(reporteDetalles);
    this.menuList.push(cifrasAPM);
    
  }

  openDialog(){
    const dialogRef = this.dialog.open(
      ConfirmDialogComponent, 
      this.dialogService.generarReporte()
    );
    dialogRef.afterClosed().subscribe(
      _data => {
        console.log(_data);
        if(_data == true){
          
        }else{

        }
      }
    );
  }

}
