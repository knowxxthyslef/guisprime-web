import { Injectable } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';

@Injectable({ providedIn: 'root' })
export class ConfirmDialogService {
    private dialogConfig = new MatDialogConfig();

    leavingBeforeSubmit(): MatDialogConfig {
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Contraseña actualizada",
            subtitle: "<b>¡Recuerda!</b>, tu nueva contraseña te permitirá accesar cuando lo necesites.",
            cancelMessage: "Cancelar",
            confirmMessage: "Entendido",
            type: "success",
            showCancelMessage: false
        }
        return this.dialogConfig;
    }


    cuentaCreada():MatDialogConfig {
      this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "¡Tu cuenta ha sido creada con éxito!",
            subtitle: "Ya puedes inciar sesión en el SMC y comenzar a disfrutar de sus beneficios",
            cancelMessage: "Cancelar",
            confirmMessage: "Entendido",
            type: "success",
            showCancelMessage: false
        }
        /* this.dialogConfig.backdropClass = "backdropBackground" */
        return this.dialogConfig;
    }

}
