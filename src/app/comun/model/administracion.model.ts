import { autoserializeAs } from "cerializr";
import { Column } from "../data-table";

export class busquedaRequestModel{
	anio: string;
    junta: string;
}

export class ReporteExtraccionPatronesSinTrabajadores{
    @autoserializeAs(Number)
    id?: number;
    @autoserializeAs(Number)
    cveDelegacion?: number;

    @autoserializeAs(String)
    @Column({canSort: true, title: 'Delegacion'})
    desDelegacion?: string;

    @autoserializeAs(Number)
    cveSubDelegacion?: number;

    @autoserializeAs(String)
    @Column({canSort: true, title: 'SubDelegacion'})
    desSubDelegacion?: string;

    @autoserializeAs(Number)
    @Column({canSort: true, title: 'Patrones sin trabajadores'})
    patronesSinTrabajadores?: number;
}

export class ReporteCifrasControlExtraccionPatronesVigentesSinTrabajadores{
    @autoserializeAs(Number)
    id?: number;
    @autoserializeAs(Number)
    cveDelegacion?: number;

    @autoserializeAs(String)
    @Column({canSort: true, title: 'OOAD'})
    delegacion?: string;

    @autoserializeAs(Number)
    @Column({canSort: true, title: 'Patrones sin trabajadores'})
    patronesSinTrabajadores?: number;
}

export class ReportePatronesVigentesSinTrabajadores{
    @autoserializeAs(Number)
    id?: number;
    @autoserializeAs(Number)
    cveDelegacion?: number;

    @autoserializeAs(String)
    @Column({canSort: true, title: 'NRP'})
    nrp?: string;

    @autoserializeAs(String)
    @Column({canSort: true, title: 'Razón social'})
    razonSocial?: string;

    @autoserializeAs(Number)
    @Column({canSort: true, title: '1er Mes'})
    mes1?: number;
    
    @autoserializeAs(Number)
    @Column({canSort: true, title: '2do Mes'})
    mes2?: number;

    @autoserializeAs(Number)
    @Column({canSort: true, title: '3er Mes'})
    mes3?: number;

    @autoserializeAs(Number)
    @Column({canSort: true, title: '4to Mes'})
    mes4?: number;

    @autoserializeAs(Number)
    @Column({canSort: true, title: '5to Mes'})
    mes5?: number;

    @autoserializeAs(Number)
    @Column({canSort: true, title: '6to Mes'})
    mes6?: number;
}