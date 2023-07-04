import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class MonthByYearService{
    private isYearSelected = new BehaviorSubject<number>(0);
    public isSelected$ = this.isYearSelected.asObservable();
    
    constructor(){}

    public setYearSelected(value: number){
        this.isYearSelected.next(value);
    }
}