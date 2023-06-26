import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../config/endpoints';
import { Observable, map, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CatalogoService {
    constructor(
        private http: HttpClient,
    ) {
    }

    /* public getJSON(request: PageRequest<Cliente>) {
        return this.http.get("./assets/json/car.json")
        .pipe(map((response: any) => response)).toPromise();
    } */

}

