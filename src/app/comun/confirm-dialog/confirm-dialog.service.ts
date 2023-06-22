import { Injectable } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';

@Injectable({ providedIn: 'root' })
export class ConfirmDialogService {
    private dialogConfig = new MatDialogConfig();

    /* 
    TYPE:
    success
    error
    warn
    info 
    */

    generarReporte(): MatDialogConfig {
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Generar reporte",
            subtitle: "¿Deseas descagar el reporte en PDF?",
            cancelMessage: "No",
            confirmMessage: "Si",
            type: "success",
            showCancelMessage: true
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
