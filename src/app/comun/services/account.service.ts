import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class AccountService {

 /*  public userSubject: BehaviorSubject<UserLoginModel>;
  public user: Observable<UserLoginModel>; */
  private refreshTokenTimeout;
  private variableLocalStorage: string = 'proyect_user';
  private menu = new BehaviorSubject<boolean>(true);
  private token: string;

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {
    
  }

  

}
