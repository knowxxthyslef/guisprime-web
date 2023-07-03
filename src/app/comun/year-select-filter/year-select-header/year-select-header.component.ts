import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCalendarHeader } from '@angular/material/datepicker';

@Component({
  selector: 'app-year-select-header',
  templateUrl: './year-select-header.component.html',
  styleUrls: ['./year-select-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YearSelectHeaderComponent  extends MatCalendarHeader<Date> {

  get label() {
    return super.periodButtonText;
  }

  public next() {
    super.nextClicked();
  }

  public prev() {
    super.previousClicked();
  }

}


