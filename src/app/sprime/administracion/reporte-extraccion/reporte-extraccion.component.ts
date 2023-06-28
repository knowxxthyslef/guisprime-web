import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { SummaryColoredCardModel } from 'src/app/comun/summary-colored-card';

@Component({
  selector: 'app-reporte-extraccion',
  templateUrl: './reporte-extraccion.component.html',
  styleUrls: ['./reporte-extraccion.component.scss']
})
export class ReporteExtraccionComponent implements OnInit {

  cars$: Observable<any[]>;

  cifraEntidades : SummaryColoredCardModel;
  cifraSubDelegaciones : SummaryColoredCardModel;
  cifraDesconcentradas : SummaryColoredCardModel;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {

    this.cifraEntidades = new SummaryColoredCardModel({
      secondaryColor: '#a6ddc3',
      description: 'Total entidades',
      color: '#ddf2e8',
      numericValue: 100
    });

    this.cifraSubDelegaciones = new SummaryColoredCardModel({
      secondaryColor: '#a1acf7',
      description: 'Total OOAD y subdelegaciones',
      color: '#e7eafd',
      numericValue: 100
    });

    this.cifraDesconcentradas = new SummaryColoredCardModel({
      secondaryColor: '#f6d7a2',
      description: 'Total subdelegaciones<br>desconcentradas',
      color: '#fdf6ea',
      numericValue: 100
    });
    /* this.cars$ = this.http.get<any[]>("assets/json/car.json").pipe(
      map((res: JsonArray) => DeserializeArray(res, Car)),
      tap(res => console.log(res))
    );  */
  }

}
