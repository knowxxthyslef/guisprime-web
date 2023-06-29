import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NAV } from 'src/app/comun/config/global';
import { ConfirmDialogComponent } from 'src/app/comun/confirm-dialog';
import { ConfirmDialogService } from 'src/app/comun/confirm-dialog/confirm-dialog.service';
import { GeneralComponent } from 'src/app/comun/general-component/general.component';

@Component({
  selector: 'app-home-administracion-usuario',
  templateUrl: './home-administracion-usuario.component.html',
  styleUrls: ['./home-administracion-usuario.component.scss']
})
export class HomeAdministracionUsuarioComponent extends GeneralComponent implements OnInit {

  form!: FormGroup;
  busquedaCurp: boolean;

  constructor(private dialog: MatDialog,
    private dialogService: ConfirmDialogService,
    private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      curp:['', [Validators.required, 
        Validators.maxLength(18), 
        Validators.pattern(this.curpPattern)]],
    });
  }

  busqueda() {
    this.busquedaCurp = !this.busquedaCurp;
    this.openDialogCurp();
  }

  openDialogCurp(){
    const dialogRef = this.dialog.open(
      ConfirmDialogComponent, 
      this.dialogService.curpNoLocalizada()
    );
    dialogRef.afterClosed().subscribe(
      _data => {
        if(_data == true){
          this.goToNuevo();
        } else {
        }
      }
    );
  }

  goToNuevo() {
    this._router.navigateByUrl(NAV.registroUsuario)
  }

}
