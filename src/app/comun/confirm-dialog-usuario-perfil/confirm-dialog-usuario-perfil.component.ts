import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog-usuario-perfil',
  templateUrl: './confirm-dialog-usuario-perfil.component.html',
  styleUrls: ['./confirm-dialog-usuario-perfil.component.scss']
})
export class ConfirmDialogUsuarioPerfilComponent implements OnInit {

  form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ConfirmDialogUsuarioPerfilComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.dialogRef.disableClose = true;
    this.form = this.formBuilder.group({
      perfil: ['', [Validators.required]],
      motivos: ['', [Validators.required]],
    });
  }

  closeDialog() {
    this.dialogRef.close(false);
  }

  confirmDialog() {
    if (!this.form.invalid) {
      this.dialogRef.close(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

}
