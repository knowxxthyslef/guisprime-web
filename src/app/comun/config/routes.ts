import { BaseComponent } from 'src/app/sprime/base/base.component';
import { NAV } from './global';
import { Routes } from '@angular/router';



export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: NAV.login
  },
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
    path: NAV.administracion,
    pathMatch: 'prefix',
    component: BaseComponent,
    /* canActivateChild: [RolAuthorizacionGuard], */
    children:[
      {
        path:'',
        loadChildren:() => import('src/app/sprime/autorizacion/usuarios/home-administracion-usuario/home-administracion-usuario.module').then(m=>m.HomeAdministradorUsuarioModule),
        outlet:'base'
      },
    ]
  },
  {
    path: NAV.home,
    pathMatch: 'prefix',
    component: BaseComponent,
    /* canActivateChild: [RolAuthorizacionGuard], */
    children:[
      {
        path:'',
        loadChildren:() => import('src/app/sprime/administracion/administracion.module').then(m=>m.AdministracionModule),
        outlet:'base'
      },
    ]
  },
  {
    path: '**',
    redirectTo: NAV.login
  }

];



