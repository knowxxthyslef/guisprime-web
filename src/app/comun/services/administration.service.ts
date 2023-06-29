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

    /* public getJSON(request: PageRequest<Cliente>) {
        return this.http.get("./assets/json/car.json")
        .pipe(map((response: any) => response)).toPromise();
    } */

    public getJSON(request: PageRequest<busquedaRequestModel>) {
        return this.http.get<any>("./assets/json/clientes.json");
    }

}

