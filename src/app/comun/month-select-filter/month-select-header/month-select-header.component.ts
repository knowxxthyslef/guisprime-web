import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCalendarHeader } from '@angular/material/datepicker';

@Component({
  selector: 'app-month-select-header',
  templateUrl: './month-select-header.component.html',
  styleUrls: ['./month-select-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonthSelectHeaderComponent extends MatCalendarHeader<Date> {

  get label() {
    return super.periodButtonText;
  }

}
