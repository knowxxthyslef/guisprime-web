import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserLoginModel } from '../model/userLogin.model';
import { API } from '../config/endpoints';


@Injectable({ providedIn: 'root' })
export class AccountService {

  public userSubject: BehaviorSubject<UserLoginModel>;
  public user: Observable<UserLoginModel>;
  private refreshTokenTimeout;
  private variableLocalStorage: string = 'proyect_user';
  private menu = new BehaviorSubject<boolean>(true);
  private token: string;

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {
    let tokenObject = JSON.parse(localStorage.getItem(this.variableLocalStorage));
    this.userSubject = new BehaviorSubject<any>(this.getUserByToken(tokenObject));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): UserLoginModel {
    return this.userSubject?.value;
  }

  login(user: HttpParams) {
    return this.http.post<any>(`${API.seguridad.oauth}`,
        user.toString(),
        {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .set('Authorization', 'Basic c3BtQXBwOjEyMzQ1Ng==')
        }
    )
        .toPromise()
        .then(data => {
            this.agregarUsuario(JSON.stringify(data), this.getUserByToken(data));
        });
  }

  agregarUsuario(jwt: string, usuario: UserLoginModel) {
    localStorage.setItem(this.variableLocalStorage, jwt);
    this.userSubject.next(usuario);
    this.startRefreshTokenTimer();
  }

  refreshToken() {
    console.log('::::::::Refrescando token:::::::')
    const body = new HttpParams()
      .set('grant_type', 'refresh_token')
      .set('refresh_token', this.userValue.refreshToken.bearer);
    if (this.userValue && this.userValue.refreshToken) {
      return this.http.post<any>(`${API.seguridad.oauth}`,
        body.toString(),
        {
          headers: new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', 'Basic bm1sc3NjQXBwOjEyMzQ1Ng==')
        })
        .toPromise()
        .then(data => {
          this.agregarUsuario(JSON.stringify(data), this.getUserByToken(data));
          return;
        });
    }
  }

  logout() {
    this.stopRefreshTokenTimer();
    localStorage.removeItem(this.variableLocalStorage);
    localStorage.clear();
    sessionStorage.clear();
    this.userSubject?.next(null);
    this.router.navigate(['login']);
  }

  public startRefreshTokenTimer() {
    // Refresca cuando el tiempo de expiracion esta al 90%
    console.log('refrescando')
    if (this.userValue.accessToken && this.userValue.expires_in > 0) {
      const timeout = this.userValue.expires_in * 1000 * 0.8;
      console.log('#######timeout######',timeout)
      this.refreshTokenTimeout = setTimeout(() => this.refreshToken(), timeout);
    }
  }

  private stopRefreshTokenTimer() {
    if(this.refreshTokenTimeout){
      clearTimeout(this.refreshTokenTimeout);
    }
  }

  private b64DecodeUnicode(str) {
    return decodeURIComponent(atob(str).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }

  private getUserByToken(data: any): UserLoginModel {
    try {
      let tokenDecrypt = JSON.parse(this.b64DecodeUnicode(data.access_token.split('.')[1]));
      let refreshTokenDecrypt = JSON.parse(this.b64DecodeUnicode(data.refresh_token!.split('.')[1]));
      let user: UserLoginModel = {
        
        correo: tokenDecrypt.correo,
        username: tokenDecrypt.user_name,
        cveUsuario: tokenDecrypt.cveUsuario,
        /* user_name: tokenDecrypt.user_name,
        password: null,
        nombre: tokenDecrypt.nombre,
        delegacion: tokenDecrypt.delegacion,
        apellidoPaterno: tokenDecrypt.apellidoPaterno,
        apellidoMaterno: tokenDecrypt.apellidoMaterno, */
        authorities: tokenDecrypt.authorities,
        accessToken: {
          bearer: data.access_token,
          tiempo: tokenDecrypt.exp
        },
        refreshToken: {
          bearer: data.refresh_token,
          tiempo: refreshTokenDecrypt.exp
        },
        expires_in: data.expires_in,
      };
      return user;
    } catch (error) {
      return null;
    }
  }


}
