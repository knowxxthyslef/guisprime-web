import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API } from "src/app/comun/config/endpoints";
import { ServerResponse } from "../model/server-response.model";

@Injectable()
export class ResetPasswordService {
    
    constructor(
      private http: HttpClient,
    ) {
    }
  
    updatePassword(curp: string, password: string) {
      return this.http.put<ServerResponse>(`${API.usuarios.updatePassword}`, {
        cveUsuario: curp
        ,cvePassword: password
      }, {
        headers:{
            Authorization: `Basic c21wQXBwOjEyMzQ1Ng==`
        }
      })
        .toPromise()
        .then(data => { return data });
    }
  
  }