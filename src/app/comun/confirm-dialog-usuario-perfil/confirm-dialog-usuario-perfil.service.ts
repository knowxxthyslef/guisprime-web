import { Injectable } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';

@Injectable({ providedIn: 'root' })
export class ConfirmDialogPerfilService {
    private dialogConfig = new MatDialogConfig();

    perfilActualizar(): MatDialogConfig {
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        return this.dialogConfig;
    }
}
