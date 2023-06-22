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
