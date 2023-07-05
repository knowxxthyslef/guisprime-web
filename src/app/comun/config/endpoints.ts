import { environment } from 'src/environments/environment';

export const API = {
  seguridad: {
    oauth: environment.apiSprimeLogin + '/v1/oauth/token',
  },
  catalogos: {
    mock: environment.apiSprimeCatalogos + '/v1/catalogos/mock/'
  },
  usuarios: {
    updatePassword: environment.apiSprimeLogin + '/v1/usuario/updateUsuarioPassword',
    curp: environment.apiSprimeLogin + '/v1/usuario/usuario',
  }
};
