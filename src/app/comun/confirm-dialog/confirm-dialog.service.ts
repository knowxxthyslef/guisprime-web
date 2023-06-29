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

    curpNoLocalizada():MatDialogConfig {
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Aviso",
            subtitle: "La CURP ingresada No existe en el sistema SPRIME ¿Desea darla de Alta? ",
            cancelMessage: "No",
            confirmMessage: "Si",
            type: "error",
            showCancelMessage: true
        }
        return this.dialogConfig;
    }

    usuarioBaja():MatDialogConfig {
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Baja usuario",
            subtitle: "¿Deseas dar de baja al usuario seleccionado?<br>Al hacerlo será eliminado del Sistema SPRIME",
            cancelMessage: "No",
            confirmMessage: "Si",
            type: "success",
            showCancelMessage: true
        }
        return this.dialogConfig;
    }

    usuarioActualizar():MatDialogConfig {
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Actualizar contraseñas",
            subtitle: "¿Deseas actualizar la contraseña del usuario seleccionado?",
            cancelMessage: "No",
            confirmMessage: "Si",
            type: "success",
            showCancelMessage: true
        }
        return this.dialogConfig;
    }

  
}
