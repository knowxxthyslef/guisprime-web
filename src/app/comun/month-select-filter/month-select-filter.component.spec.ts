import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthSelectFilterComponent } from './month-select-filter.component';

describe('MonthSelectFilterComponent', () => {
  let component: MonthSelectFilterComponent;
  let fixture: ComponentFixture<MonthSelectFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthSelectFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthSelectFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
