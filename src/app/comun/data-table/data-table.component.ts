import { Component, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Sort, SortDirection } from "@angular/material/sort";
import { TableModel } from './table.model';
import { ColumnModel } from './column.model';
import { sortBy, orderBy, cloneDeep } from "lodash";
import { tableSymbol } from './column';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  @Input() callbackFunctionOnPaged: (params: Sort) => void;

  private _data = [];
  private _originalData: any[] = [];
  private _tableModel: TableModel;

  
  @Input() showTitle: boolean = true;
  @Input() set data(values: any[]) {
    if (values && values.length > 0) {
      this._data = cloneDeep(values);
      this._tableModel = this._data[0][tableSymbol];
      this.buildColumns();
      if (!this._originalData.length) {
        // Keep original order of data
        this._originalData = cloneDeep(this._data);
      }
    }
  }
  get data(): any[] {
    return this._data;
  }
  @Input() instance: any;

  columns: ColumnModel[];
  displayedColumns: string[];
  public des: boolean = false;
  public dataSource: MatTableDataSource<any>;
  

  constructor() { }

  ngOnInit(): void {
  }



  sortData(params: Sort) {
    console.log(params);
    const direction: SortDirection = params.direction;
    this.callbackFunctionOnPaged(params);
    /* this.data = direction
      ? orderBy(this.data, [params.active], [direction])
      : this._originalData; */
  }

  private buildColumns() {
    this.columns = this._tableModel.columns;
    console.log(this.columns);
    this.sortColumns();
    this.displayedColumns = this.columns.map(col => col.key);
  }

  private sortColumns() {
    this.columns = sortBy(this.columns, ["order"]);
    console.log(this.columns);
  }

}
