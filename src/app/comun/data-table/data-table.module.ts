import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table.component';
import { MatTableModule } from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    DataTableComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatTableModule,
    MatSortModule
  ],
  exports: [
    DataTableComponent
  ]
})
export class DataTableModule { }
