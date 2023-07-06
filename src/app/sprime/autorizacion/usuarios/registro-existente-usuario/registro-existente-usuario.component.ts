import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/comun/confirm-dialog';
import { ConfirmDialogUsuarioPerfilComponent } from 'src/app/comun/confirm-dialog-usuario-perfil';
import { ConfirmDialogPerfilService } from 'src/app/comun/confirm-dialog-usuario-perfil/confirm-dialog-usuario-perfil.service';
import { ConfirmDialogService } from 'src/app/comun/confirm-dialog/confirm-dialog.service';
import { GeneralComponent } from 'src/app/comun/general-component/general.component';

@Component({
  selector: 'app-registro-existente-usuario',
  templateUrl: './registro-existente-usuario.component.html',
  styleUrls: ['./registro-existente-usuario.component.scss']
})
export class RegistroExistenteUsuarioComponent extends GeneralComponent  implements OnInit {

  public btnBaja = {
    buttonIcon: true,
    buttonIconImg: 'Iconbaja',
    buttonClass: 'btn-administrador',
    buttonText: 'Baja usuario',
    buttonAling: 'start center',
    accion: 'baja'
  }
  public btnPassword = {
    buttonIcon: true,
    buttonIconImg: 'Iconpassword',
    buttonClass: 'btn-administrador',
    buttonText: 'Actualizar contraseña',
    buttonAling: 'start center',
    accion: 'actualizar'
  }
  public btnPerfil = {
    buttonIcon: true,
    buttonIconImg: 'Iconperfil',
    buttonClass: 'btn-administrador',
    buttonText: 'Cambio de perfil',
    buttonAling: 'start center',
    accion: 'perfil'
  }
  public btnGuardar = {
    buttonIcon: false,
    buttonClass: 'btn-guardar',
    buttonText: 'Guardar',
    buttonAling: 'center center',
    accion: 'guardar'
  }

  constructor(private dialog: MatDialog,
    private dialogPerfilService: ConfirmDialogPerfilService,
    private dialogService: ConfirmDialogService) {
    super();
  }

  ngOnInit(): void {
  }

  recibiRespuesta($event) {
    console.log($event)
    switch($event) {
      case 'baja':
        this.openDialogBaja();
      break;
      case 'actualizar':
        this.openDialogActualizar();
      break;
      case 'perfil':
        this.openDialogPerfil();
      break;
    }
  }

  openDialogBaja(){
    const dialogRef = this.dialog.open(
      ConfirmDialogComponent, 
      this.dialogService.usuarioBaja()
    );
    dialogRef.afterClosed().subscribe(
      _data => {
        console.log(_data);
        if(_data == true){
          
        }
      }
    );
  }

  openDialogActualizar(){
    const dialogRef = this.dialog.open(
      ConfirmDialogComponent, 
      this.dialogService.usuarioActualizar()
    );
    dialogRef.afterClosed().subscribe(
      _data => {
        console.log(_data);
        if(_data == true){
          
        }
      }
    );
  }

  openDialogPerfil(){
    const dialogRef = this.dialog.open(
      ConfirmDialogUsuarioPerfilComponent, 
      this.dialogPerfilService.perfilActualizar()
    );
    dialogRef.afterClosed().subscribe(
      _data => {
        console.log(_data);
      }
    );
  }

}
