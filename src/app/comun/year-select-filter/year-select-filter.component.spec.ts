import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearSelectFilterComponent } from './year-select-filter.component';

describe('YearSelectFilterComponent', () => {
  let component: YearSelectFilterComponent;
  let fixture: ComponentFixture<YearSelectFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearSelectFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearSelectFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
