import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SprimeModule } from './sprime/sprime.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import {LayoutModule} from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    NgxSpinnerModule,
    SprimeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
