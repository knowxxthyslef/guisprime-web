import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './alert.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule
    ],
    declarations: [AlertComponent],
    exports: [AlertComponent]
})
export class AlertModule { }
