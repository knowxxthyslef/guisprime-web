import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AccountService } from '../services/account.service';


@Injectable()
export class ErrorInterceptorHelper implements HttpInterceptor {

    private excludeService: Array<string> = [
        '/v1/oauth/token',
    ];

    constructor(
        private router: Router,
        private accountService: AccountService,
    ){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.isServiceExcluded(request.url) === false) {
            return next.handle(request).pipe(catchError(err => {
                const error = (err.error && err.error.mensaje) || (err.error && err.error.error_description) || err.name;
                if(err.error && (err.error.error === 'unauthorized' ||  err.error.error === 'invalid_token') ){
                    
                    this.accountService.logout();
                
                }else if(err.error && (err.name === 'HttpErrorResponse')){
                    return throwError(() => error);      
                }
                else{
                    
                }
               return throwError(() => error);
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