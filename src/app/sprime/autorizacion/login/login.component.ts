import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  public ver: boolean = false;

  ngOnInit(): void {
    this.form = new FormGroup({
      curp: new FormControl('', [
          Validators.required,
          Validators.maxLength(40),
      ]),
      password: new FormControl('', [
          Validators.required,
          Validators.maxLength(12),
          Validators.minLength(8),
      ])
    });
  }
}
