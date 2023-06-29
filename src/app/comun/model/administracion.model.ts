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
