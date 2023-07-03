import { CUSTOM_ELEMENTS_SCHEMA, Injector, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SprimeModule } from './sprime/sprime.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import {LayoutModule} from '@angular/cdk/layout';
import { AppInjectorService } from './comun/herencia/app-injector.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CurrencyPipe, DatePipe } from '@angular/common';
import { HttpRequestInterceptor } from './comun/interceptors/spinnerInterceptor/spinner-interceptor';
import { UserIdleModule } from 'angular-user-idle';
import { ErrorInterceptorHelper } from './comun/helper/errorInterceptor.helper';
import { JWTInterceptorHelper } from './comun/interceptors/jwtInterceptor.helper';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UserIdleModule.forRoot({idle: 600, timeout: 180, ping: 120}),
    LayoutModule,
    NgxSpinnerModule,
    SprimeModule,
    
    HttpClientModule
  ],
  exports:[NgxSpinnerModule],
  providers: [
    /* provideUserIdleConfig({ idle: 1620, timeout: 180, ping: 120 }), */
    { provide: LOCALE_ID, useValue: 'en-US' },
    DatePipe,
    CurrencyPipe,
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorHelper, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptorHelper, multi: true },
    ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(private injector: Injector) {
    AppInjectorService.setInjector(this.injector);
  }
}

