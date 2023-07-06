import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AccountService } from '../services/account.service';
import { AlertService } from '../alertas';


@Injectable()
export class ErrorInterceptorHelper implements HttpInterceptor {

    private excludeService: Array<string> = [
        '/v1/oauth/token',
        '/v1/usuario/usuario'
    ];
    
    constructor(
        private accountService: AccountService,
        private _alertsServices: AlertService
    ){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.isServiceExcluded(request.url) === false) {
            return next.handle(request).pipe(catchError(err => {
                const error = (err.error && err.error.mensaje) || (err.error && err.error.error_description) || err.name;
                if(err.error && (err.error.error === 'unauthorized' ||  err.error.error === 'invalid_token') ){
                    this.accountService.logout();
                } else if(err.error && (err.name === 'HttpErrorResponse')){
                    this._alertsServices.error(err.error.mensaje);
                    return throwError(() => error);      
                } 
                else{
                    return next.handle(request);
                }
            }))
        }else{
            return next.handle(request);
        }
    }

    private isServiceExcluded(url: string): boolean {
        const found = this.excludeService.filter((service) => {
            if (url.includes(service)) {
                return service;
            }
        });
    
        return found.length > 0;
    }
}