import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Button } from './button.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, OnDestroy {

  @Input() button: Button = new Button({
    buttonIcon: false,
    buttonClass: 'btn-default',
    buttonText: 'Guardar'
  });
  @Input() disabled: boolean;
  @Output() valueResponse: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  evento() {
    this.valueResponse.emit( this.button.accion);
  }

  ngOnDestroy(): void {
    this.button = null;
    this.valueResponse.emit(null);
  }
}
