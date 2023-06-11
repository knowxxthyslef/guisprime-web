import { BaseComponent } from 'src/app/sprime/base/base.component';
import { NAV } from './global';
import { Routes } from '@angular/router';



export const appRoutes: Routes = [
  {
    path: NAV.login,
    pathMatch: 'prefix',
    component: BaseComponent,
    /* canActivateChild: [RolAuthorizacionGuard], */
    children:[
      {
        path:'',
        loadChildren:() => import('src/app/sprime/autorizacion/autorizacion.module').then(m=>m.AutorizacionModule),
        outlet:'base'
      },
    ]
  },
  {
    path: '**',
    redirectTo: NAV.login
  }

];



