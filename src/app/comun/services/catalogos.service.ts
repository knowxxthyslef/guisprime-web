import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../config/endpoints';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CatalogoService {
  constructor(
    private http: HttpClient,
  ) {
  }

  getClaseActor(){
    return this.http.get<any[]>(`${API.catalogos.mock}`);
  }

  getDesistimientos(sort: string, order: any, page, size, cveAsunto) {
    console.info("getDesistimientos");
    let options: HttpParams = new HttpParams();
    if (sort) {
      options = options.set('sort', sort);
      options = options.set('order', order);
    }
    options = options.set('page', page);
    options = options.set('size', size);
    return this.http.get<any[]>(`${API.catalogos.mock}/${cveAsunto}`, { params: options });
  }

  getRecursosAmparos(cveAsunto) {
    return this.http.get(`${API.catalogos.mock}?idAsunto=${cveAsunto}`, { observe: 'response' });
  }

  postSinopsis(model) {
    return this.http.post<any>(`${API.catalogos.mock}`, model);
  }

  concentrarConciliacion(asunto: any) {
    return this.http.post<any>(`${API.catalogos.mock}`, asunto)
      .toPromise()
      .then(data => { return data });
  }

}

