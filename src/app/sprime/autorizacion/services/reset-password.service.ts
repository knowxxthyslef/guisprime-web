import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API } from "src/app/comun/config/endpoints";

@Injectable()
export class ResetPasswordService {
    
    constructor(
      private http: HttpClient,
    ) {
    }
  
    updatePassword(curp: string, password: string) {
      return this.http.put<any>(`${API.usuarios.updatePassword}`, {
        cveUsuario: "OERG820910HVZABC00"
        ,cvePassword: "Mexico83"
      }, {
        headers:{
            Authorization: `Basic c21wQXBwOjEyMzQ1Ng==`
        }
      })
        .toPromise()
        .then(data => { return data });
    }
  
  }