import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { UserLoginModel } from '../model/userLogin.model';
import { AccountService } from '../services/account.service';

@Injectable()
export class JWTInterceptorHelper implements HttpInterceptor {
  private count = 0;
    constructor(
        private accountService: AccountService,
        private spinner: NgxSpinnerService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      const user = this.accountService.userValue;
      const isLoggedIn = user && user.accessToken;
      /* if ((isLoggedIn) || request.url.endsWith("/login")) { */
      if (isLoggedIn) {
        request = request.clone(this.obtenerHeaders(user, request));
      }
      return next.handle(request);

    }

    private obtenerHeaders(user: UserLoginModel, request: HttpRequest<any>) {
        let headers = {
            setHeaders: {
                'Authorization': (user == null) ? "" : "Bearer " + user.accessToken.bearer,
            }
        };
        if (request.headers.keys().length > 0) {
            let headerString = request.headers.keys();
            for (let i = 0; i < headerString.length; i++) {
                headers.setHeaders[headerString[i]] = request.headers.get(headerString[i]);
            }
        } else if (request.method == "POST" && request.url.indexOf('upload') < 0) {
            headers.setHeaders["Content-Type"] = 'application/json;charset=UTF-8';
            headers.setHeaders["Accept"] = 'application/json, application/octet-stream ,text/plain';
        }
        return headers;
    }
}
