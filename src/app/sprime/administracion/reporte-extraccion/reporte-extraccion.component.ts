import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { DeserializeArray, JsonArray } from "cerializr";
import { map, tap } from "rxjs/operators";
import { Car } from 'src/app/comun/model/car.model';

@Component({
  selector: 'app-reporte-extraccion',
  templateUrl: './reporte-extraccion.component.html',
  styleUrls: ['./reporte-extraccion.component.scss']
})
export class ReporteExtraccionComponent implements OnInit {

  cars$: Observable<any[]>;
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.cars$ = this.http.get<any[]>("assets/json/car.json").pipe(
    map((res: JsonArray) => DeserializeArray(res, Car)),
    tap(res => console.log(res))
  );
        
  }

}
