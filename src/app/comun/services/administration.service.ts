import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../config/endpoints';
import { Observable, map, of } from 'rxjs';
import { PageRequest } from '../dataObject/page.request';
import { busquedaRequestModel } from '../model/administracion.model';

@Injectable({ providedIn: 'root' })
export class AdministrationService {
    constructor(
        private http: HttpClient,
    ) {
    }

    getCurpValid(curp:string){
        return  this.http.get<any>(`${API.usuarios.curp}/${curp}`)
        .toPromise()
        .then(data => { return data });
    }

    getCurpValidSubscribe(curp:string){
        return  this.http.get<any>(`${API.usuarios.curp}/${curp}`)
    }

    /* public getJSON(request: PageRequest<Cliente>) {
        return this.http.get("./assets/json/car.json")
        .pipe(map((response: any) => response)).toPromise();
    } */

    public getJSON(request: PageRequest<busquedaRequestModel>) {
        return this.http.get<any>("./assets/json/clientes.json");
    }

    public getJSONCifras(request: PageRequest<busquedaRequestModel>) {
        return this.http.get<any>("./assets/json/cifras.json");
    }

    public getJSONPatronesSinTrabajadores(request: PageRequest<busquedaRequestModel>) {
        return this.http.get<any>("./assets/json/patronesSinTrabajadores.json");
    }

    public getJSONPatronesPrimaMediaActual(request: PageRequest<busquedaRequestModel>) {
        return this.http.get<any>("./assets/json/patronesPrimaMediaActual.json");
    }

}

