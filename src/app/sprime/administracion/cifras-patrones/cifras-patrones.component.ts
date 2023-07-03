import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { DeserializeArray } from 'cerializr';
import { Page } from 'src/app/comun/dataObject/page';
import { PageRequest } from 'src/app/comun/dataObject/page.request';
import { GeneralComponent } from 'src/app/comun/general-component/general.component';
import { ReporteCifrasControlExtraccionPatronesVigentesSinTrabajadores, busquedaRequestModel } from 'src/app/comun/model/administracion.model';
import { AdministrationService } from 'src/app/comun/services/administration.service';
import { SummaryColoredCardModel } from 'src/app/comun/summary-colored-card';

@Component({
  selector: 'app-cifras-patrones',
  templateUrl: './cifras-patrones.component.html',
  styleUrls: ['./cifras-patrones.component.scss']
})
export class CifrasPatronesComponent extends GeneralComponent implements OnInit {

  data: any[];
  public des: boolean = false;
  public filtradoBusqueda: string = null;
  public actualPage: number;


  cifraEntidades : SummaryColoredCardModel;
  cifraSubDelegaciones : SummaryColoredCardModel;
  cifraDesconcentradas : SummaryColoredCardModel;



  public pageData: Page<ReporteCifrasControlExtraccionPatronesVigentesSinTrabajadores> = new Page<ReporteCifrasControlExtraccionPatronesVigentesSinTrabajadores>();
  public fetchRequest: PageRequest<busquedaRequestModel> =
    new PageRequest<busquedaRequestModel>();

  constructor(
    public administrationService: AdministrationService
  ) { 
    super();
  }

  ngOnInit(): void {

    this.pageData.init([]);

  

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

    this.actualPage = 1;
    this.onPaged();
  
  }

  onPaged(){
    
    this._spinner.show();
    this.fetchRequest.page = this.actualPage;
		this.fetchRequest.model = new busquedaRequestModel();	
    this.fetchRequest.pageSize = 10;
    this.fetchRequest.order = this.filtradoBusqueda;
    this.fetchRequest.desc = this.des
    this.administrationService.getJSONCifras(this.fetchRequest)
    .subscribe({
        next: (result) => {
          console.log(result)
          this.pageData.init(result);
          this.data = DeserializeArray(result.content, ReporteCifrasControlExtraccionPatronesVigentesSinTrabajadores)
        },
        error: (e) => {

        },
        complete: () => {
          setTimeout(() => {
            this._spinner.hide();
          }, 300);
        } 
    });
  }

  changePage(page: number){
    this.actualPage = page;
    this.onPaged();
  }

  sortPage = async (params: Sort): Promise<void> => {
    console.log(params);
    this.filtradoBusqueda = params.active ? params.active : null;
    this.des =  params.direction === 'desc' ? true : false;
    this.onPaged();

  }

  sendAlert(){
    this._alertsServices.info('<b>Hubo un error en la descarga del documento, inténtalo de nuevo.</b>');
  }

}
