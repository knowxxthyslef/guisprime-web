import { Delegacion } from "./catalogos.model";

export class UserLoginModel {
   /*  id: string;
    correo: string;
    password: string;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    rol?: string[];
    delegacion?: Delegacion; */
    cveUsuario?: string;
    correo?: string;
    accessToken: BearerModel;
    refreshToken: BearerModel;
    expires_in?: number;
    username?: string;
    authorities?: string[];

    nombre?: string;
    apellidoPaterno?: string;
    apellidoMaterno?: string;
    curp?: string;
    delegacion?: string;
    subdelegacion?: string;
    perfil?: string;

}

class BearerModel {
    bearer: string;
    tiempo: number;
}

export class BearerList{
    cvePerfil?: number;
    cveUsuario?: number;
    desPerfil?: string;
}
