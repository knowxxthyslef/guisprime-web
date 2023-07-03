import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppInjectorService } from '../herencia/app-injector.service';
import { NAV } from '../config/global';
import { fromEvent, of, Subscription } from 'rxjs';

import { NgxSpinnerService } from 'ngx-spinner';
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
  curpPattern = "[A-Z][A,E,I,O,U,X][A-Z]{2}[0-9]{2}[0-1][0-9][0-3][0-9][M,H][A-Z]{2}[B,C,D,F,G,H,J,K,L,M,N,Ñ,P,Q,R,S,T,V,W,X,Y,Z]{3}[0-9,A-Z][0-9]";

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
