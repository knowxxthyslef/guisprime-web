import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface ComponentLeave {
  canLeave: () => Observable<boolean> | Promise<boolean>  | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class RouteGuardHelper implements CanActivate, CanDeactivate<ComponentLeave> {
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return false;
  }

  canDeactivate(
    component: ComponentLeave,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if ( component.canLeave ) {
        return component.canLeave();
      }
      return true;
  }
  
}
