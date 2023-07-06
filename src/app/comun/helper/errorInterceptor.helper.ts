import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AccountService } from '../services/account.service';
import { AlertService } from '../alertas';


@Injectable()
export class ErrorInterceptorHelper implements HttpInterceptor {
    constructor(
        private router: Router,
        private accountService: AccountService,
        private _alertsServices: AlertService
    ){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            const error = (err.error && err.error.mensaje) || (err.error && err.error.error_description) || err.name;
            if(err.error && (err.error.error === 'unauthorized' ||  err.error.error === 'invalid_token') ){
                this.accountService.logout();
            } else if(err.error && (err.name === 'HttpErrorResponse')){
                this._alertsServices.error(err.error.mensaje);
                return null;      
            } 
            else{
                return next.handle(request);
            }
        }))
    }
}