import { Component, OnDestroy, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormArray, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppInjectorService } from '../herencia/app-injector.service';
import { NAV } from '../config/global';
import { fromEvent, of, Subscription } from 'rxjs';
import { API } from '../config/endpoints';

import { NgxSpinnerService } from 'ngx-spinner';
import { formatDate } from '@angular/common';
import { AccountService } from '../services/account.service';
import { AlertService } from '../alertas';
import { CatalogoService } from '../services/catalogos.service';

@Component({
  selector: 'app-general',
  template: ""
})
export class GeneralComponent implements OnDestroy{

  protected delegacionUsuario: any;
  protected textAreaMaxLength = 1200;

  public isSubmit = false;
  subscripcion: Subscription;
  existeExcepcion: boolean;

  private _ruta: ActivatedRoute;
  protected _alertsServices: AlertService;
  protected _catalogoService: CatalogoService;
  protected _router: Router;
  _nav = NAV;
  /* protected _sessionStorageService : SessionStorageService; */
  protected _spinner : NgxSpinnerService;

  constructor(
  ) {
    const injector = AppInjectorService.getInjector();
    
    /* this.delegacionUsuario = this.accountService.getDelegacion(); */
    this._ruta = injector.get(ActivatedRoute);
    this._alertsServices = injector.get(AlertService);
    this._catalogoService = injector.get(CatalogoService);
    this._router = injector.get(Router);
    /* this._sessionStorageService = injector.get(SessionStorageService); */
    this._spinner = injector.get(NgxSpinnerService);

    history.pushState(null, null, location.href);
    this.subscripcion = fromEvent(window, 'popstate').subscribe(_ => {
        history.pushState(null, null, location.href);
    });

    
  }

  ngOnDestroy(): void {
    this.subscripcion?.unsubscribe();
  } 

  goToLogin() {
    
  }

  /* CHARCODELIST */
  /*
    209 = Ñ
    241 = ñ
    32 = space
  */

  public onlyNumbers(event) {
    let k;
    k = event.charCode;
    return (!(k > 31 && (k < 48 || k > 57)));
  }

  public onlyalpha(event) {
    let k;
    k = event.charCode;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 241 || k == 209);
  }

  public onlyalphaSpace(event) {
    let k;
    k = event.charCode;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || k == 241 || k == 209);
  }

  public onlyalphaEmail(event) {
    let k;
    k = event.charCode;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || (!(k > 31 && (k < 48 || k > 57))) || k == 8 || k == 46 || k == 64 || k == 241 || k == 209 || k == 45 || k == 95 );
  }

  public onlyalphaAndNumbers(event) {
    let k;
    k = event.charCode;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || (!(k > 31 && (k < 48 || k > 57)))  || k == 8 || k == 241 || k == 209);
  }


}
