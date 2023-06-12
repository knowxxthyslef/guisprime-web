import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SprimeRoutingModule } from './sprime-routing.module';
import { BaseComponent } from './base/base.component';


@NgModule({
  declarations: [
    BaseComponent
  ],
  imports: [
    CommonModule,
    SprimeRoutingModule
  ],
  exports:[
    BaseComponent
  ],
  providers:[

  ]
})
export class SprimeModule { }
