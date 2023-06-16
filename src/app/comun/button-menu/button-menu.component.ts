import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonMenu } from './button-menu.model';

@Component({
  selector: 'app-button-menu',
  templateUrl: './button-menu.component.html',
  styleUrls: ['./button-menu.component.scss']
})
export class ButtonMenuComponent implements OnInit {

  @Input() button: ButtonMenu = new ButtonMenu({
    icon: 'button-ico',
    secondaryColor: 'linear-gradient(#46a8b9, #96cfd9)',
    description: 'Reporte de extracción<br> de patrones',
    id: 1,
    color: '#f5f5f5',
    url: 'login'
  });

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  send(){
    this.router.navigate(['/', 'home', { outlets: { 'base' : this.button.url } }]);
  }

}
