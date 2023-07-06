import { Injectable } from "@angular/core";

@Injectable()
export class LoginDataService{

    loginCurp: string = "LOGINCURP";
    
    constructor(){}

    public setLoginCurp(curp : string){
        sessionStorage.setItem(btoa(this.loginCurp),btoa(curp));
    }

    public getLoginCurp(){
        let bcurp = sessionStorage.getItem(btoa(this.loginCurp));
        if(bcurp)
            return atob(bcurp);
        else return "";
    }

    public deleteLoginCurp(){
        sessionStorage.removeItem(btoa(this.loginCurp));
    }

}